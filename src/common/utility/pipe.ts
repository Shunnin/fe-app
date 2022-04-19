export const pipe =
  (...hofs) =>
  x =>
    hofs.reduceRight((currying, hof) => hof(currying), x);
