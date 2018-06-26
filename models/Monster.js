const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const monsterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a monitor name!'
    },
    
    slug: String,
    
    description: {
        type: String,
        trim: true
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: true
    }
});

monsterSchema.pre('save', async function(next) {
    if (!this.isModified('name')) {
      next(); // skip it
      return; // stop this function from running
    }
    this.slug = slug(this.name);
    // find other stores that have a slug of wes, wes-1, wes-2
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
    const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
    if (storesWithSlug.length) {
      this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
    }
    next();
  });

  module.exports = mongoose.model('Monster', monsterSchema);