const tweets = [
  {
    id: 1,
    name: "Fred",
    handle: "muchcattocute",
    profilePic: "http://placekitten.com/200/310",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/301"
  },
  {
    id: 2,
    name: "Banana 🍌",
    handle: "happyface",
    profilePic: "http://placekitten.com/200/320",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/300"
  },
  {
    id: 3,
    name: "Fred",
    handle: "muchcattocute",
    profilePic: "http://placekitten.com/200/310",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/304"
  },
  {
    id: 4,
    name: "Banana 🍌",
    handle: "happyface",
    profilePic: "http://placekitten.com/200/320",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/303"
  },
  {
    id: 5,
    name: "Fred",
    handle: "muchcattocute",
    profilePic: "http://placekitten.com/200/310",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/305"
  },
  {
    id: 6,
    name: "Banana 🍌",
    handle: "happyface",
    profilePic: "http://placekitten.com/200/320",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/306"
  },
  {
    id: 7,
    name: "Fred",
    handle: "muchcattocute",
    profilePic: "http://placekitten.com/200/310",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/307"
  },
  {
    id: 8,
    name: "Banana 🍌",
    handle: "happyface",
    profilePic: "http://placekitten.com/200/320",
    content:
      "I can haz pet me pet me don't pet me, rub my belly hiss, crusty butthole meowzer or relentlessly pursues moth. Man running from cops stops to pet cats, goes to jail cat ass trophy, kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick",
    media: "http://placekitten.com/200/308"
  }
];

module.exports = (req, res) => {
  const { query } = req;
  const { id } = query;

  if (id) {
    const tweetsById = tweets.filter(t => t.handle === id);

    res.json(tweetsById);

    return;
  }

  res.json(tweets);
};
