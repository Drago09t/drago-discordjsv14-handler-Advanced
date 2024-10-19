const Premium = require('../schemas/premiumSchema');

module.exports = {
  async checkPremium(userId) {
    const premium = await Premium.findOne({ userId });
    if (premium && premium.premium && premium.expirationDate > new Date()) {
      return true;
    }
    return false;
  },
};
