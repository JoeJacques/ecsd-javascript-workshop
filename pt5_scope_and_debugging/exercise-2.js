"use strict"

// Buggy Script for Spawn Wave

// Map
const Map = (() => {
  function generateMap(tileFactory) {
    this.grid = [];
    for (let y = 0; y < this.size; y++) {
      this.grid[y] = [];
      for (let x = 0; x < this.size; x++) {
        this.grid[y][x] = tileFactory(x, y);
      }
    }
  }

  return ((size) => {
    return {
      size,
      grid: [],
      generateMap
    };
  });
})();

// Tile
const Tile = (() => {
  return ((x, y) => {
    return {
      active: false,
      x: x,
      y: y
    }
  });
})();

// GUI
const GUI = (() => {
  function drawMap() {
    const tileHeight = this.canvas.height / this.map.size;
    const tileWidth = this.canvas.width / this.map.size;

    for (const row of this.map.grid) {
      for (const tile of row) {
        const posX = tile.x * tileWidth;
        const posY = tile.y * tileHeight;

        this.context.moveTo(posX, posY);

        this.drawSquare(posX, posY, tile.active);
      }
    }
  }

  function drawSquare(x, y, active) {
    this.context.beginPath();
    this.context.lineTo(x + this.tileWidth, y);
    this.context.lineTo(x + this.tileWidth, y - this.tileHeight);
    this.context.lineTo(x, y - this.tileHeight);
    this.context.lineTo(x, y);

    if (active){
      this.context.fillStyle = "black";
    } else {
      this.context.fillStyle = "white";
    }

    this.context.fill();
    this.context.stroke();
  }

  function clickEvent(event) {
    const rect = this.canvas.getBoundingClientRect();
    const mapPosX = event.clientX - rect.left;
    const mapPosY = event.clientY - rect.top;

    const mapCoordX = Math.round(mapPosX / this.tileWidth);
    const mapCoordY = Math.round(mapPosY / this.tileHeight);

    this.waveSequence(this, this.map, this.map.grid[mapCoordY][mapCoordX]).process();
  }

  return ((map, canvasId, contextFlag, waveSequence) => {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext(contextFlag);

    const tileWidth = canvas.width / map.size;
    const tileHeight = canvas.height / map.size;

    const gui = {
      tileWidth,
      tileHeight,
      map,
      canvas,
      context,
      drawMap,
      drawSquare,
      clickEvent,
      waveSequence
    };

    canvas.addEventListener("mouseclick", (event) => {
      gui.clickEvent(event);
    });

    return gui;
  });
})();

const WaveSequence = (() => {
  function process() {
    const nextTilesToProcess = [];

    for (const i in this.tilesToProcess) {
      const tile = this.tilesToProcess[i];

      this.tilesProcessed.push(tile);

      const offsets = [[0, -1], [-1, 0], [0, 1], [1, 0]];

      for (const offset of offsets) {
        const xCoord = tile.x + offset[0];
        const yCoord = tile.y + offset[1];

        if (xCoord >= 0 && xCoord < this.map.size &&
            yCoord >= 0 && yCoord < this.map.size) {

          const scoutedTile = this.map.grid[yCoord][xCoord];

          if (this.tilesProcessed.includes(scoutedTile)) {
            scoutedTile.active = false;
          } else if (!nextTilesToProcess.includes(scoutedTile)) {
            scoutedTile.active = true;
            nextTilesToProcess.push(scoutedTile);
          }
        }
      }

      tile.active = false;
    }

    gui.drawMap();

    this.tilesToProcess = nextTilesToProcess;

    if (this.tilesToProcess.length > 0) {
      setTimeout(() => this.process(), 250)
    }
  }

  return ((gui, map, startingTile) => {
    return {
      gui,
      map,
      tilesToProcess: [startingTile],
      tilesProcessed: [],
      process
    };
  });
})();
