import { expect } from 'chai';
import * as titans from "../data.js";

describe("titans module", () => {
 it("returns requested titan", function() {
   let result = titans.getItem('Beast');
   expect(result).to.deep.equal({name: "Beast", str:'28 (+9)', dex:'22 (+6)'});
 });

 it("fails w/ invalid titan", () => {
   var result = titans.get("fake");
   expect(result).to.be.undefined;
 });
});
