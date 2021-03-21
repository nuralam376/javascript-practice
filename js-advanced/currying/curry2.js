function campaign(price, discount) {
  return price - price * discount;
}

function newCampaign(discount) {
  return (price) => {
    return price - price * discount;
  };
}

console.log(campaign(200, 0.1));

const tenPercent = newCampaign(0.1);
console.log(tenPercent(600));
const twentyPercent = newCampaign(0.2);
console.log(twentyPercent(800));
