
function validateHero(hero) {
  if (!hero || typeof hero !== "object") {
    return "Invalid hero data.";
  }
  
  if (!hero.nickname || !hero.real_name || !hero.origin_description || !hero.superpowers || !hero.catch_phrase || !hero.images) {
    return "All fields are required.";
  }

  if (hero.nickname.length < 3 || hero.nickname.length > 50) {
    return "Nickname must be between 3 and 50 characters.";
  }

  if (hero.real_name.length < 3 || hero.real_name.length > 50) {
    return "Real name must be between 3 and 50 characters.";
  }

  if (hero.origin_description.length > 500) {
    return "Origin description cannot exceed 500 characters.";
  }

  if (hero.superpowers.length > 500) {
    return "Superpowers cannot exceed 500 characters.";
  }

  if (hero.catch_phrase.length > 100) {
    return "Catch phrase cannot exceed 100 characters.";
  }

  for (const image of hero.images) {
    if (typeof image !== "string") {
      return "Images must be strings.";
    }
  }

  return null;
}

module.exports = validateHero;