export default () => {

  const texts = [
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers."
    + " The round pegs in the square holes. The ones who see things differently."
    + " They're not fond of rules. And they have no respect for the status quo."
    + " You can quote them, disagree with them, glorify or vilify them. About the only thing"
    + " you can't do is ignore them. Because they change things. They push the human race forward. And"
    + " while some may see them as the crazy ones, we see genius. Because the people who are crazy"
    + " enough to think they can change the world, are the ones who do.",

    "I believe that everything happens for a reason. People change so that you can learn to let go,"
    + " things go wrong so that you appreciate them when they're right, you believe lies so you eventually"
    + " learn to trust no one but yourself, and sometimes"
    + " good things fall apart so better things can fall together.",

    "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If"
    + " you want to make sure of keeping it intact you must give it to no one, not even an animal."
    + " Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe"
    + " in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless"
    + " will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable."
    + " To love is to be vulnerable"
  ];
  
  return texts[Math.floor(Math.random()*texts.length)];

}