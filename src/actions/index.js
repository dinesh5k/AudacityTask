let dictionary = [
  { type: "strawberries", id: 1 },
  { type: "bee sting", id: 2 },
  { type: "seafood", id: 3 },
  { type: "peanuts", id: 4 }
];
function getId(desc) {
  let maxid = -1, description = desc.toLowerCase(), typeIndex = dictionary.find(x => x.type == description);
  if (typeIndex !== undefined) return typeIndex.id;
  else {
    dictionary.map(function(dictObj) {
      if (dictObj.id > maxid) maxid = dictObj.id;
    });
    dictionary.push({ type: description, id: maxid + 1 });
    return maxid + 1;
  }
}

export const addReaction = (description, observationDate, severity) => ({
  type: "ADD_NEW_REACTION",
  id: getId(description),
  description,
  observationDate,
  severity: Number(severity)
});
