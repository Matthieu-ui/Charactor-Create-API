
import { expect } from 'chai';
import { titansModel } from "./src/models/titans.model.js"


describe("titans module", () => {
 it("returns requested titan", function() {
   let result = titansModel.getItem('Beast');
   expect(result).to.deep.equal({name: "Beast", str:'28 (+9)', dex:'22 (+6)'});
 });

 it("fails w/ invalid titan", () => {
   let result = titansModel.get("fake");
   expect(result).to.be.undefined;
 });

 it("adds requested titan", function() {
  let result = titansModel.addItem("smoll titan", '28 (+9)', '22 (+6)');
  expect(result).to.be.true;
});

 
it("fails with duplicate titan", () => {
  let result = titansModel.addItem("smoll titan", '28 (+9)', '22 (+6)');
  expect(result).to.be.false;
});

it("deletes titan if found in array", function() {
  let result = titansModel.deleteItem("smoll titan", '28 (+9)', '22 (+6)');
  expect(result).to.be.true;
});


it("will not delete if titan not found", function() {
  let result = titansModel.deleteItem("thicc titan", '28 (+9)', '22 (+6)');
  expect(result).to.be.false;
});


});


