// @ts-check

/* IMPORTS */
import "../types/IFlowerParams.js";
import "../types/IFlowerPetal.js";
import Flower from "./Flower.js";
import { dtr } from "../utils/utils.js";

/** 
 * @class RotatingFlower
 * @classdesc Represents a pre-rendered rotating flower.
 * @extends Flower
 * @prop {FlowerPetal[]} _petals
 * @author TJ
 * @private
 */
class RotatingFlower extends Flower{
  /**
   * @type {number}
   */
  static maxPetals = 50;
  /**
   * @desc Creates an instance of RotatingFlower
   * @param {IFlowerParams} params 
   */
  constructor(params){
    super(params);
    /** @type {IFlowerPetal[]} */
    this._petals = [];

    // Optional properties from FlowerParams, which are required for RotatingFlower
    this.alpha = params.alpha || 1;
    this.colorFunction = params.colorFunction || function(){}; // TODO - need a default color function here
    //this.drawPetalFunction = ... // TODO - need assignment and default value
    this.deltaC = params.deltaC || 0;
    this.deltaDivergence = params.deltaDivergence || 0;
    this.deltaPetalSize = params.deltaPetalSize || 0;
    this.deltaRotation = params.deltaRotation || 0;
    this.rotation = params.rotation || 0;
  }

  /**
   * Draws the next petal.
   * @param {CanvasRenderingContext2D} ctx - drawing context where the flower will be rendered.
   */
  update(ctx) {
    const a = this.n * dtr(this.divergence);
    const r = this.c * Math.sqrt(this.n);
    const x = r * Math.cos(a);// + this.centerX;
    const y = r * Math.sin(a); //+ this.centerY;
    //const color = `hsl(${this.n/5 % 361},100%,50%)`; // 4

    const color = this.colorFunction(this.n, this.divergence);
    // If there's room, create a new petal
    if(this._petals.length < RotatingFlower.maxPetals){
      this._petals.push({x, y, color, petalSize: this.petalSize});
    }

    // Draw all petals
    ctx.save()
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.rotation);
    for(let p of this._petals){
        // let aDegrees = (n * divergence) % 256; // 2
    // let color = `rgb(${aDegrees},0,255)`;
      this.drawPetalFunction(ctx, p.x, p.y, this.petalSize, p.color);
    }
    ctx.restore();

    this.n++;
    this.c += this.deltaC;
    this.divergence += this.deltaDivergence;
    this.petalSize += this.deltaPetalSize;
    this.rotation += this.deltaRotation;
  
  }
}

export default RotatingFlower;
