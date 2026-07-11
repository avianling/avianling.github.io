const IMAGES = [
  {
    path: "Images/10.png",
    objectId: 10,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta ithyphallic figure plaque of reclining naked male, possibly Priapus, with receding hair and a beard and with his legs almost completely lost, only the raised right knee surviving. His right arm and hand hold his large phallus upright against his right side, rising almost level with the top of his head. His left hand is placed on his belly. The figure is modelled in relief with a flat back and was probably made in a one-piece mould. Micaceous orange-brown Nile silt with a thick light-grey core."
  },
  {
    path: "Images/104.jpg",
    objectId: 104,
    tags: [],
    objectType: "vase fragment",
    lat: null,
    lng: null,
    description: "Priapus, fluteplayer, Erotes."
  },
  {
    path: "Images/105.png",
    objectId: 105,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Hollow grotesque terracotta figure of Priapus or Telesphoros."
  },
  {
    path: "Images/106.png",
    objectId: 106,
    tags: [],
    objectType: "cameo",
    lat: null,
    lng: null,
    description: "Onyx cameo: nude woman, perhaps Aphrodite, with hair knotted up, standing at a well with her knees bent, drawing water into a pitcher; above the well is a herm of Priapos."
  },
  {
    path: "Images/107.png",
    objectId: 107,
    tags: [],
    objectType: "goblet",
    lat: null,
    lng: null,
    description: "Detail of the satyr on the ‘Vicarello Goblet’. 1st century BCE-1st century CE. Cleveland, The Cleveland Museum of Art."
  },
  {
    path: "Images/11.png",
    objectId: 11,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, he holds his large phallus upright against his right side and rising almost level with the top of his head. The figure is modelled in relief and was probably made in a one piece mould. Red-brown Nile silt with grey core and abundant gold mica, organics, quartz and white inclusions. Broken and lost below neck."
  },
  {
    path: "Images/12.png",
    objectId: 12,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. White coating and painted red. Red-brown Nile silt. Feet missing."
  },
  {
    path: "Images/121.jpg",
    objectId: 121,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "144 (Uncertain) Wall painting. Pompeii II 2, 2, room d, rear wall. - Schefold, WP 51; PompPittMos III (1991) 65 fig. 37. 4th style. - In central aedicula upper body herm with long, very thin herm shaft to  which wreath and palm branch are tied; in r. Hand basket, in 1. tray with ears of corn."
  },
  {
    path: "Images/122 reconstruction b.jpg",
    objectId: 122,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "122. wall painting. Pompeii VI 7, 18, Oecus II, O wall. - Schefold, WP roo; PompPittMos IV (1993) 416-  417 fig. 18b; 19th-4th style. - P. with long chiton and mitre holds mirror in which head of hermaphrodite appears. With Hercules and Omphale, Amores.\nI think this one could possibly be mislabelled. Very different from other priapus. Fully clothed attendant."
  },
  {
    path: "Images/122 reconstruction.jpg",
    objectId: 122,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "122. wall painting. Pompeii VI 7, 18, Oecus II, O wall. - Schefold, WP roo; PompPittMos IV (1993) 416-  417 fig. 18b; 19th-4th style. - P. with long chiton and mitre holds mirror in which head of hermaphrodite appears. With Hercules and Omphale, Amores.\nI think this one could possibly be mislabelled. Very different from other priapus. Fully clothed attendant."
  },
  {
    path: "Images/122.jpg",
    objectId: 122,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "122. wall painting. Pompeii VI 7, 18, Oecus II, O wall. - Schefold, WP roo; PompPittMos IV (1993) 416-  417 fig. 18b; 19th-4th style. - P. with long chiton and mitre holds mirror in which head of hermaphrodite appears. With Hercules and Omphale, Amores.\nI think this one could possibly be mislabelled. Very different from other priapus. Fully clothed attendant."
  },
  {
    path: "Images/126.jpg",
    objectId: 126,
    tags: [],
    objectType: "wall painting",
    lat: 40.775369,
    lng: 14.463003,
    description: "Painted wall of Cubiculum 16 at Boscotrecase. Naples, National Museum of Archaeology."
  },
  {
    path: "Images/127.jpg",
    objectId: 127,
    tags: [],
    objectType: "cameo fragment",
    lat: null,
    lng: null,
    description: "Translucent cobalt blue with overlay in opaque white. Vertical rim with top edge ground flat; narrow sloping collar below rim on exterior; cylindrical body with slightly convex curving side. On interior, two deep horizontal grooves below rim; on exterior, below plain collar in relief naked male figure in white, facing right, with proper left leg raised and proper right arm also raised with hand near mouth; above his head to right is a hanging leaf; behind him to left is a squared plinth on which stands a small herm of Silenus, naked, armless, and ithyphallic, in profile to right, flanked to either side by leafy sprays. The figure may be identified as a dancing satyr. Rim fragment with chips and cracks, broken at sides and bottom; dulling, slight pitting, whitish weathering on exterior, and faint iridescence. Rotary grinding marks on interior. The fragment depicts a figure facing right and a small statue of Priapus on a pedestal."
  },
  {
    path: "Images/13.png",
    objectId: 13,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. His right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand is missing. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. White coating. Nile Delta red-brown silt with grey core and abundant gold mica, organics, quartz and white inclusions. Left leg and part of body missing."
  },
  {
    path: "Images/14.png",
    objectId: 14,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. Red-brown Nile silt fabric with abundant fine gold mica, quartz, organics and white inclusions."
  },
  {
    path: "Images/15.png",
    objectId: 15,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, he holds his large phallus upright against his right side and rising almost level with the top of his head. The figure is modelled in relief with a flat back and was probably made in a one piece mould. Fragment; head only. Red-brown Nile silt fabric with grey core and brown outer margin. Abundant fine gold mica, quartz, organics and white inclusions."
  },
  {
    path: "Images/16.png",
    objectId: 16,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. Micaceous red-brown Nile silt with limestone inclusions. Bottom of legs and feet missing."
  },
  {
    path: "Images/17.png",
    objectId: 17,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, he holds his large phallus upright against his right side and rising almost level with the top of his head. The figure is modelled in relief with a flat back and was probably made in a one piece mould. Fragment; head only. Dark red-brown Nile silt fabric with grey core. Abundant fine gold mica, quartz, organics and white inclusions."
  },
  {
    path: "Images/179.jpg",
    objectId: 179,
    tags: [],
    objectType: "wall painting",
    lat: 40.805843,
    lng: 14.348058,
    description: "Taberna of Priapus. Priapus figure painted on the south wall behind a counter."
  },
  {
    path: "Images/18.png",
    objectId: 18,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta figure plaque of ithyphallic lute-player. Probably Harpocrates. A coarsely made relief of a figure seated with its knees raised and with a colossal phallus that rises up on its left side and curves over, the glans resting on its head. It plays a lute which angles across its body. Although the face has been damaged, it appears to be that of a monkey, and an uncertain object placed by its left side appears to have the tip of a tail curling across it. The lower part of the object is broken away together with the feet; there is slight damage above the object on the figure’s left side. The back is flat and at the bottom the edge begins to curve forward to the break, leaving very little room for a plinth. One-piece mould. Micaceous brick-red Nile silt with a thick grey core and white inclusions. A minute lump of a white dressing remains in the groove defining the glans."
  },
  {
    path: "Images/180.jpg",
    objectId: 180,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "House of the Birii; House of the Sibyl (Complesso dei Riti Magici???). Priapus pained high on the sides of the entrance."
  },
  {
    path: "Images/181.jpg",
    objectId: 181,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Pompei (IX 3,5 (Casa delle Suonatrici, aka house of marcus lucretius)). Herakles stands nude but for light dress hanging over his back and leg, he wears wreath, necklet, finger ring and shoes and holds a staff with ribbons attached. He leans on a foreign-looking figure (Priapus) who wears a cap, earrings and log dress which an Eros is raising. On the ground Erotes have his cup and quiver. At the right Omphale with lionskin over her dress, one breast bare, leaning of Herakles' club. Behind her a dusky youth and a wreathed woman."
  },
  {
    path: "Images/181b.jpg",
    objectId: 181,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Pompei (IX 3,5 (Casa delle Suonatrici, aka house of marcus lucretius)). Herakles stands nude but for light dress hanging over his back and leg, he wears wreath, necklet, finger ring and shoes and holds a staff with ribbons attached. He leans on a foreign-looking figure (Priapus) who wears a cap, earrings and log dress which an Eros is raising. On the ground Erotes have his cup and quiver. At the right Omphale with lionskin over her dress, one breast bare, leaning of Herakles' club. Behind her a dusky youth and a wreathed woman."
  },
  {
    path: "Images/181c.jpg",
    objectId: 181,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Pompei (IX 3,5 (Casa delle Suonatrici, aka house of marcus lucretius)). Herakles stands nude but for light dress hanging over his back and leg, he wears wreath, necklet, finger ring and shoes and holds a staff with ribbons attached. He leans on a foreign-looking figure (Priapus) who wears a cap, earrings and log dress which an Eros is raising. On the ground Erotes have his cup and quiver. At the right Omphale with lionskin over her dress, one breast bare, leaning of Herakles' club. Behind her a dusky youth and a wreathed woman."
  },
  {
    path: "Images/181d.jpg",
    objectId: 181,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Pompei (IX 3,5 (Casa delle Suonatrici, aka house of marcus lucretius)). Herakles stands nude but for light dress hanging over his back and leg, he wears wreath, necklet, finger ring and shoes and holds a staff with ribbons attached. He leans on a foreign-looking figure (Priapus) who wears a cap, earrings and log dress which an Eros is raising. On the ground Erotes have his cup and quiver. At the right Omphale with lionskin over her dress, one breast bare, leaning of Herakles' club. Behind her a dusky youth and a wreathed woman."
  },
  {
    path: "Images/182.jpg",
    objectId: 182,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco from the House of the Surgeon, Pompeii (VI.6.10)."
  },
  {
    path: "Images/182b.jpg",
    objectId: 182,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco from the House of the Surgeon, Pompeii (VI.6.10)."
  },
  {
    path: "Images/183.jpg",
    objectId: 183,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "A painted Priapus from House II.9.1 at Pompeii"
  },
  {
    path: "Images/184.jpg",
    objectId: 184,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a man sacrificing to Priapus from the Villa of the Mysteries at Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/184b.jpg",
    objectId: 184,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a man sacrificing to Priapus from the Villa of the Mysteries at Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/184c.jpg",
    objectId: 184,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a man sacrificing to Priapus from the Villa of the Mysteries at Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/184d.jpg",
    objectId: 184,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a man sacrificing to Priapus from the Villa of the Mysteries at Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/185.jpg",
    objectId: 185,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Priapus fresco from the House of the Vettii at Pompeii (VI.15.1)."
  },
  {
    path: "Images/187.jpg",
    objectId: 187,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco from the House of the Lovers in Pompeii (I.10.11). Naples, National Archaeology Museum."
  },
  {
    path: "Images/187b.jpg",
    objectId: 187,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco from the House of the Lovers in Pompeii (I.10.11). Naples, National Archaeology Museum."
  },
  {
    path: "Images/189.jpg",
    objectId: 189,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of Priapus from the lupanare at Pompeii (VII.12.18)."
  },
  {
    path: "Images/19.png",
    objectId: 19,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. Nile Delta red-brown silt with grey core and abundant gold mica, organics, quartz and white inclusions."
  },
  {
    path: "Images/190.jpg",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190a.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190b.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190c.jpeg",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190d.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190e.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190f.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190g.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190i.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190j.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190k.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190l.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/190m.JPG",
    objectId: 190,
    tags: [],
    objectType: "fountain",
    lat: 40.74941,
    lng: 14.485429,
    description: "Marble Priapus fountain from the House of the Vettii at Pompeii (VI.15.1). Photo:"
  },
  {
    path: "Images/192.jpg",
    objectId: 192,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Detail of Priapus in a fresco from the Villa of the Mysteries at Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/193.jpg",
    objectId: 193,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Priapus, Hercules and Ompahle fresco from the House of Marcus Lucretius at Pompeii (V.4.a). Naples, National Museum of Archaeology."
  },
  {
    path: "Images/195.jpg",
    objectId: 195,
    tags: [],
    objectType: "doorway",
    lat: 40.74941,
    lng: 14.485429,
    description: "Doorway of House II.1.12 at Pompeii."
  },
  {
    path: "Images/2.png",
    objectId: 2,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta figure of ithyphallic Harpocrates. Mould-made plaque with hollow core. Top of body and head missing. Nile Delta red-brown silt with grey core and abundant gold mica, organics, quartz and white inclusions."
  },
  {
    path: "Images/20.png",
    objectId: 20,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard (Priapus?), his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. The figure is modelled in relief with a flat back and was probably made in a one piece mould. Mould-made and solid. Dark red-brown Nile silt fabric with grey core. Abundant fine gold mica, quartz, organics and white inclusions. Head and chest only, bottom half is missing."
  },
  {
    path: "Images/200.jpg",
    objectId: 200,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Painting of Venus and Priapus from House I.13.16 at Pompeii."
  },
  {
    path: "Images/201a.jpg",
    objectId: 201,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco with myth of Polyphemus from the House of the Priest Amandus at Pompeii (I.7.7). Photo: www.pompiiinpictures.com/pompeiiinpictures/r1/1%2007%2007%20p4.htm"
  },
  {
    path: "Images/201b.jpg",
    objectId: 201,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco with myth of Polyphemus from the House of the Priest Amandus at Pompeii (I.7.7). Photo: www.pompiiinpictures.com/pompeiiinpictures/r1/1%2007%2007%20p4.htm"
  },
  {
    path: "Images/201c.jpg",
    objectId: 201,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco with myth of Polyphemus from the House of the Priest Amandus at Pompeii (I.7.7). Photo: www.pompiiinpictures.com/pompeiiinpictures/r1/1%2007%2007%20p4.htm"
  },
  {
    path: "Images/203.jpg",
    objectId: 203,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a sacral-idyllic landscape from the Temple of Isis, Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/203b.jpg",
    objectId: 203,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco of a sacral-idyllic landscape from the Temple of Isis, Pompeii. Naples, National Archaeology Museum."
  },
  {
    path: "Images/204.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/204b.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/204c.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/204d.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/204e.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/204f.jpg",
    objectId: 204,
    tags: [],
    objectType: "fresco",
    lat: 40.74941,
    lng: 14.485429,
    description: "Fresco on the east wall of room 9, House of the Ceii, Pompeii (I.6.15)."
  },
  {
    path: "Images/206.jpg",
    objectId: 206,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Detail from a wall painting at the House of the Priest Amandus in Pompeii (I.7.7)."
  },
  {
    path: "Images/206b.jpg",
    objectId: 206,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "Detail from a wall painting at the House of the Priest Amandus in Pompeii (I.7.7)."
  },
  {
    path: "Images/208.jpg",
    objectId: 208,
    tags: [],
    objectType: "statue",
    lat: 40.74941,
    lng: 14.485429,
    description: "Stone statue of Priapus and a gladiator found at a tavern in Pompeii (I.20.1)."
  },
  {
    path: "Images/21.png",
    objectId: 21,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta ithyphallic figure plaque, possibly of Priapus or Harpocrates. A seated man with his left leg bent with the knee raised, and his right leg bent with the knee on the ground, the foot crossing in front of the root of his gigantic and slightly curved phallus, which he holds against his left shoulder with his left hand. His right hand holds a large indeterminate animal, perhaps a monkey or a bird, to the front of his body, its head resting against his chest and its left foreleg resting on the man’s shoulder. All is coarsely modelled, in particular the head and face: he may be shaven with a side-lock. There is no plinth, and the lower edge slants up to the figure’s left: the object was not made to stand. The back is flat. Solid; one-piece mould. Micaceous orange-brown Nile silt with many white inclusions. The front has substantial traces of a white dressing, much of which is painted black."
  },
  {
    path: "Images/213.jpg",
    objectId: 213,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "51st - Wall painting, lost (after drawing DA! Rome). From Pompeii VII 3, 25. -Rostovtsev, M., RM 26, I9II, 45 fig. 25; Schefold, WP r77; idem, AM7r, r956, 223 Suppl. 124. 3rd style r. in front at water on  rocky ledge P. idol, a second apparently behind 1st J\\.1it Pan"
  },
  {
    path: "Images/214a.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214b.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214c.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214d.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214e.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214f.jpeg",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/214g.JPG",
    objectId: 214,
    tags: [],
    objectType: "inlay",
    lat: 40.74941,
    lng: 14.485429,
    description: "36. marble inlay. Naples, Mus. Naz. 9977. from Pompeii VII 4, 31- 51, tablinum d. - Elia, 0., Bol/Arte r929, 265-276; Schefold, WP 183. - P.ldol on rock in Dionysian thiasos. With Victoria"
  },
  {
    path: "Images/216b.jpg",
    objectId: 216,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "87.* (= Heracles 3337 with lit., = Venus 366 with lit.) Wall painting. Pompeii VII 9, 47. - In the round temple group of Venus (Pompeiana), Cupid and P. With gladiator."
  },
  {
    path: "Images/216c.jpg",
    objectId: 216,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "87.* (= Heracles 3337 with lit., = Venus 366 with lit.) Wall painting. Pompeii VII 9, 47. - In the round temple group of Venus (Pompeiana), Cupid and P. With gladiator."
  },
  {
    path: "Images/216d.jpg",
    objectId: 216,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "87.* (= Heracles 3337 with lit., = Venus 366 with lit.) Wall painting. Pompeii VII 9, 47. - In the round temple group of Venus (Pompeiana), Cupid and P. With gladiator."
  },
  {
    path: "Images/217.jpg",
    objectId: 217,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "95.* Wall painting. Pompeii I 6, 15, Viridarium h, O wall. - Michel, D., Casa dei Cei, Houses in Pompeii 3 (1990) 58. 85 figs. 265. 274. 277, 279. 280; PompPittMos I (1990) 476-480 figs. 105-109 - Vespasian. -  P.-ldol on high pedestal at body of water (mitre [after Michel Hut]; torch?); in front two women."
  },
  {
    path: "Images/217b.jpg",
    objectId: 217,
    tags: [],
    objectType: "wall painting",
    lat: 40.74941,
    lng: 14.485429,
    description: "95.* Wall painting. Pompeii I 6, 15, Viridarium h, O wall. - Michel, D., Casa dei Cei, Houses in Pompeii 3 (1990) 58. 85 figs. 265. 274. 277, 279. 280; PompPittMos I (1990) 476-480 figs. 105-109 - Vespasian. -  P.-ldol on high pedestal at body of water (mitre [after Michel Hut]; torch?); in front two women."
  },
  {
    path: "Images/219a.jpg",
    objectId: 219,
    tags: [],
    objectType: "mural",
    lat: null,
    lng: null,
    description: "II2.* Mural. Pompeii VI 15, 1, Fauces b, W wall, r. next to door to atrium. - Fröhlich, Th., Lararien and  facade paintings in the Vesuvian cities. RM Erg.-H. 32 (1991) 279-280 L 71 pl. 8, 1; PompPittMos V \"(1994) 471 figs. 2nd-4th style. - P. standing with L elbow leaning on a pillar and with balance in r. Hand with which he weighs his huge phallos against a purse; red <phrygian) cap, yellow chiton with green  sleeves and equal borders, fur boots; on pillar thyrsos, below fruit basket.\""
  },
  {
    path: "Images/219b.jpg",
    objectId: 219,
    tags: [],
    objectType: "mural",
    lat: null,
    lng: null,
    description: "II2.* Mural. Pompeii VI 15, 1, Fauces b, W wall, r. next to door to atrium. - Fröhlich, Th., Lararien and  facade paintings in the Vesuvian cities. RM Erg.-H. 32 (1991) 279-280 L 71 pl. 8, 1; PompPittMos V \"(1994) 471 figs. 2nd-4th style. - P. standing with L elbow leaning on a pillar and with balance in r. Hand with which he weighs his huge phallos against a purse; red <phrygian) cap, yellow chiton with green  sleeves and equal borders, fur boots; on pillar thyrsos, below fruit basket.\""
  },
  {
    path: "Images/219c.jpg",
    objectId: 219,
    tags: [],
    objectType: "mural",
    lat: null,
    lng: null,
    description: "II2.* Mural. Pompeii VI 15, 1, Fauces b, W wall, r. next to door to atrium. - Fröhlich, Th., Lararien and  facade paintings in the Vesuvian cities. RM Erg.-H. 32 (1991) 279-280 L 71 pl. 8, 1; PompPittMos V \"(1994) 471 figs. 2nd-4th style. - P. standing with L elbow leaning on a pillar and with balance in r. Hand with which he weighs his huge phallos against a purse; red <phrygian) cap, yellow chiton with green  sleeves and equal borders, fur boots; on pillar thyrsos, below fruit basket.\""
  },
  {
    path: "Images/219d.jpg",
    objectId: 219,
    tags: [],
    objectType: "mural",
    lat: null,
    lng: null,
    description: "II2.* Mural. Pompeii VI 15, 1, Fauces b, W wall, r. next to door to atrium. - Fröhlich, Th., Lararien and  facade paintings in the Vesuvian cities. RM Erg.-H. 32 (1991) 279-280 L 71 pl. 8, 1; PompPittMos V \"(1994) 471 figs. 2nd-4th style. - P. standing with L elbow leaning on a pillar and with balance in r. Hand with which he weighs his huge phallos against a purse; red <phrygian) cap, yellow chiton with green  sleeves and equal borders, fur boots; on pillar thyrsos, below fruit basket.\""
  },
  {
    path: "Images/22.png",
    objectId: 22,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. Red-brown Nile silt with grey core, abundant gold mica, organics, quartz and white inclusions. Feet and base missing."
  },
  {
    path: "Images/220.png",
    objectId: 220,
    tags: [],
    objectType: "skyphos",
    lat: null,
    lng: null,
    description: "Silver skyphos. 1-30 CE. Boston, Museum of Fine Arts."
  },
  {
    path: "Images/225.jpg",
    objectId: 225,
    tags: [],
    objectType: "kantharos",
    lat: null,
    lng: null,
    description: "57.- Kantharos, so called Coupe des Ptolem€:es, Sardonyx. Paris, Cab. Med. 368. - Babelon, BiblNatCamles no. 368 pl. 43; Furtwängler, AG III 156 fig. 108-ro9; Simon, E., Die Portlandvase (r957)  56- 57 pl. 26; Bühler, H.-P., Antike Gefäße aus Edelsteinen (1973) 45- 47 no. 18 color plates. I. - I. c. B.C.  - Sanctuaries of P. and of ➔ Demeter /Ceres; P. idol in casting posture on sacrificial table with Nebris. Bucolic-Dionysian props."
  },
  {
    path: "Images/23.png",
    objectId: 23,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta ithyphallic figure plaque, possibly Priapus. The upper part of naked man, probably reclining. His hair recedes at the temples and he wears a beard. He has a protuberant belly on which he places his left hand, probably holding an object; his right hand holds his large phallus upright against his right side, rising almost level with the top of his head. The figure is modelled in relief with a flat back and was probably made in a one-piece mould: the edges are pared. Micaceous red-brown Nile silt."
  },
  {
    path: "Images/230.jpg",
    objectId: 230,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief: terminal figure of the fertility god Priapus set in a landscape with a sepulchral urn on a pillar."
  },
  {
    path: "Images/231.jpg",
    objectId: 231,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Oval black glass paste intaglio: semi-draped female figure, perhaps Aphrodite, shown lifting the hem of her skirt, stood next to an ithyphallic figure, perhaps a statue of Priapus."
  },
  {
    path: "Images/232.jpg",
    objectId: 232,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Bronze plastic lamp in the form of Priapus with short-cropped hair and prominent ears, wearing a cloak and an amulet-case on a neck-ring. His right hand rests on his colossal phallus, which forms the nozzle; in the crook of his left arm are leaves and fruits, including a bunch of grapes, an apple, a pine-cone and a pomegranate. At the back of his neck are hinge-pieces for a lid (now lost) which formed the crown of the head, covering the filling-hole. The figure is cracked and disfigured by corrosion, with fragments missing. The chin and left leg were repaired in antiquity."
  },
  {
    path: "Images/234.jpg",
    objectId: 234,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Carnelian gem. 1st Cenutry CE. Vienna, Kunsthistorisches Museum."
  },
  {
    path: "Images/238.jpg",
    objectId: 238,
    tags: [],
    objectType: "cameo",
    lat: null,
    lng: null,
    description: "Sardonyx cameo of Bacchus, Ariadne and Priapus. 1st century CE. Vienna, Kunsthistorisches Museum."
  },
  {
    path: "Images/242.jpg",
    objectId: 242,
    tags: [],
    objectType: "plaque",
    lat: null,
    lng: null,
    description: "Marble plaque with Hercules and Priapus. 1st Century CE. Boston, Museum and Fine Arts."
  },
  {
    path: "Images/243.jpg",
    objectId: 243,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus, holding a vine."
  },
  {
    path: "Images/245.jpg",
    objectId: 245,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Terracotta figure of Priapos. A bearded and draped Priapos standing, flanked by date-palms, with his head inclined to his right, pulling back his garment with his left hand to expose the hole where his separately made phallus was inserted (its stump remains together with its plaster adhesive). His right arm is contained within the drapery, the hand resting on his chest. He wears a dry measure with a disc or stud on the front, and boots. Only the upper part of a plinth survives. Behind his neck is a suspension-lug, but otherwise the back is plain. Hollow; two-piece mould. Micaceous orange-brown Nile silt, with minute traces of a white dressing on the front."
  },
  {
    path: "Images/246.jpg",
    objectId: 246,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus."
  },
  {
    path: "Images/247.jpg",
    objectId: 247,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Bronze plastic lamp in the form of a bearded and cloaked man, perhaps Priapus, with a large upcurved phallus forming the nozzle. In the top of the head is a filling-hole; at the back of the neck are hinge-pieces, presumably for a lid (now lost) which formed the hood of the cloak. One of the legs is restored; three blow-hole s are repaired by rectangular patches."
  },
  {
    path: "Images/248.jpg",
    objectId: 248,
    tags: [],
    objectType: "jug",
    lat: null,
    lng: null,
    description: "Bronze jug-handle: Priapus; the horizontal terminates in bird's head."
  },
  {
    path: "Images/248a2.jpg",
    objectId: 248,
    tags: [],
    objectType: "jug",
    lat: null,
    lng: null,
    description: "Bronze jug-handle: Priapus; the horizontal terminates in bird's head."
  },
  {
    path: "Images/249.jpg",
    objectId: 249,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Copper alloy statuette of herm of Priapus."
  },
  {
    path: "Images/250.jpg",
    objectId: 250,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Gem of glass paste imitating sard, engraved with a nude woman, perhaps Aphrodite, with hair knotted up, standing at a well with her knees bent, drawing water into a pitcher; above the well is a term of Priapos; the water issues from a rock."
  },
  {
    path: "Images/251.jpg",
    objectId: 251,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Gem of transparent green glass paste, engraved with a bearded ithyphallic Priapos looking to the left; he holds a piece of drapery round his hips with both hands; in the upper folds are fruits."
  },
  {
    path: "Images/252.jpg",
    objectId: 252,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Gem of glass paste imitating amethyst, engraved with Eros looking round with wings erect, holding a sash (?) in his left hand; before him is a statue of Priapos on an altar or pedestal; behind this is a tree."
  },
  {
    path: "Images/253.jpg",
    objectId: 253,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Gem of glass paste imitating sard, engraved with a woman (?) kneeling to the right, milking a goat (?) into a jug; on the right is a small statue of Priapos on a high plinth, behind which is a tree spreading over the scene."
  },
  {
    path: "Images/254.jpg",
    objectId: 254,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with Aphrodite stooping to adjust her sandal, assisted by Eros; she leans against a statue of Priapos."
  },
  {
    path: "Images/255.jpg",
    objectId: 255,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with a beardless ithyphallic Priapus holding three ears of corn; on the right are three poppies."
  },
  {
    path: "Images/258.jpg",
    objectId: 258,
    tags: [],
    objectType: "cameo",
    lat: null,
    lng: null,
    description: "46. cameo, sardonyx. Paris, Cab. ME:d. 98. - Babelon, BiblNatCam€es No. 98 pl. rn; Simon, E., JG/St 6, r964, 20 fig. 8. - Early Imperial Period. - P.Idol on rock beside plane tree to whom old woman hands  veiled phallos; .man with double flute, woman with offering tray and jug."
  },
  {
    path: "Images/264b.jpg",
    objectId: 264,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "109.* Wall painting. Naples, Mus. Naz. From Pompeii VII 4, 59 (f), triclinium south peristyle, WWand. - Helbig, wall painting no. 775; Curtius, WP 398 fig. 216; Schefold, WP 188. - Vespasian. - Four amores playing with the attributes of Venus at altar with P. statuette on it (hat, thyrsos, drinking horn). With  maenad"
  },
  {
    path: "Images/264c.jpg",
    objectId: 264,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "109.* Wall painting. Naples, Mus. Naz. From Pompeii VII 4, 59 (f), triclinium south peristyle, WWand. - Helbig, wall painting no. 775; Curtius, WP 398 fig. 216; Schefold, WP 188. - Vespasian. - Four amores playing with the attributes of Venus at altar with P. statuette on it (hat, thyrsos, drinking horn). With  maenad"
  },
  {
    path: "Images/264d.jpg",
    objectId: 264,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "109.* Wall painting. Naples, Mus. Naz. From Pompeii VII 4, 59 (f), triclinium south peristyle, WWand. - Helbig, wall painting no. 775; Curtius, WP 398 fig. 216; Schefold, WP 188. - Vespasian. - Four amores playing with the attributes of Venus at altar with P. statuette on it (hat, thyrsos, drinking horn). With  maenad"
  },
  {
    path: "Images/281.jpg",
    objectId: 281,
    tags: [],
    objectType: "lamp",
    lat: 35.32871,
    lng: 34.055176,
    description: "Fragment of a mould-made pottery lamp decorated on the discus with a herm of Priapos. The shoulder is decorated with a band of impressed ovules. The underside and nozzle are lost. Covered with an orange slip."
  },
  {
    path: "Images/283.jpg",
    objectId: 283,
    tags: [],
    objectType: "block with inscription",
    lat: null,
    lng: null,
    description: "Fragment of marble block; six lines of Greek inscription; dedication to Priapus; broken in two pieces; on top is a socket."
  },
  {
    path: "Images/284.jpg",
    objectId: 284,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Terracotta figure of Priapos. A bearded and wreathed Priapos standing on a plain, flat-fronted plinth with his legs slightly bent and his tunic drawn up to expose the hole where his separately made phallus was inserted; his right hand is placed close to the hole. He wears a dry measure and boots, and holds a double-ended thyrsos against his body with his left hand; the thyrsos has a chevronned shaft. By his right leg is a crater with a reeded neck, surmounted by a bunch of grapes. The back is plain except for an applied suspensionlug behind the head and a circular depression for an unpierced vent. Hollow; two-piece mould. Micaceous red-brown Nile silt with a brown surface. Remains of a white dressing on the front, painted pinkish-grey in places, with patches behind; his boots are painted black. The dressing is found inside the phallus socket, showing that the phallus was a separate entity."
  },
  {
    path: "Images/285.jpg",
    objectId: 285,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "A hollow terracotta figure of a bearded and draped Priapos standing with knees slightly bent and pulling back his garment with his left hand to expose the hole where his separately made phallus was inserted. He wears a wreath and a dry measure, and is flanked by date-palms. Behind his neck is an applied suspension-lug. The back is plain. The feet are broken away together with most of the palm-tree on his right side, and the lower part of that on his left. Two-piece mould. Micaceous brown Nile silt. Traces of a white dressing on front, coloured pink in places."
  },
  {
    path: "Images/287.jpg",
    objectId: 287,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with Priapos holding a sickle, and raising his drapery with both hands."
  },
  {
    path: "Images/288.jpg",
    objectId: 288,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Amethyst gem engraved with a beardless ithyphallic herm of Priapos, wearing a wreath and with drapery round his shoulders."
  },
  {
    path: "Images/289.jpg",
    objectId: 289,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Green jasper gem engraved with a cock, a human foot, cornucopia, ear of corn and term of Priapos."
  },
  {
    path: "Images/290.jpg",
    objectId: 290,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Convex garnet gem engraved with a beardless draped Priapos wearing a petasos (?) and holding an object in his left hand."
  },
  {
    path: "Images/291.jpg",
    objectId: 291,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with Seilenos, draped about the loins, resting his arm on a youthful term; on the left is an altar surmounted by a term of Priapos."
  },
  {
    path: "Images/292.jpg",
    objectId: 292,
    tags: [],
    objectType: "oscillum, patera",
    lat: null,
    lng: null,
    description: "Marble oscillum (disc suspended in a colonnade or from a tree): cupid sacrificing at an altar to the fertility god Priapus; eagle with a hare. A circular votive Patera, about a foot in diameter; on one side of it is represented, in flat relief, a Terminus of Priapus, placed upon a cippus, behind this is a syringa, and in his hand a bunch of grapes; before him is a Tripod with flames upon it, near wh stands a Geni holding a lighted torch, and a veil hangs over the whole scene. On the other side, in the center, surrounded with a margin, is an Eagle devouring a Rabbit, as seen upon the medals of Agrigentum; these are encircled by a garland of Ivy, which is enclosed by another margin. This and the beforementioned patera were found in the neighbourhood of Rome’"
  },
  {
    path: "Images/293.jpg",
    objectId: 293,
    tags: [],
    objectType: "token",
    lat: null,
    lng: null,
    description: "Cast lead token. (whole) Priapus, standing left with sickle in left arm. (obverse) Inscription. (reverse)"
  },
  {
    path: "Images/3.png",
    objectId: 3,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Harpocrates. A reclining naked figure with receding hair and a beard, but also breasts, and legs close together and bent, extending to the right. The left elbow and forearm rest on a pile of cushions, and the right hand holds a large phallus upright against the figure’s right side, rising almost level with the top of the head. The breasts are prominent and the figure may thus also have female characteristics. It is modelled in relief with a flat back and was probably made in a one-piece mould. The detail is very worn and it is uncertain how much of a plinth has broken away. Micaceous orange-brown Nile silt with a few traces of an overall matt red slip."
  },
  {
    path: "Images/304.jpg",
    objectId: 304,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bearded Priapus has a fillet with herringbone enrichment tied around his brow, and a cloak over his head and shoulders. He wears a high-belted sleeveless tunic over a long-sleeved tunic. He is holding them up to contain a lapful of fruits. His erect phallus also acts as a support for the fruit. High, rustic boots adorn his feet, which stand on a plinth. Such statues were placed in Roman gardens to ensure growth and act as protector of crops."
  },
  {
    path: "Images/31.png",
    objectId: 31,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Egyptian terracotta figure with the head of a bald man, possibly dancing. A caricatured head in 'grotesque' style. He has an elongated, long, narrow face, skull very deep, bald head, prominent nose (chipped) lips and large ears; the neck is comparatively thin. Solid, from two-piece mould, head made separately from the body. Thick white coating and yellow paint. Nile Delta brown silt with grey core and abundant gold mica, organics, quartz and white inclusions. Lost arms, plaster aheres to left arm stub."
  },
  {
    path: "Images/310.jpg",
    objectId: 310,
    tags: [],
    objectType: "coin",
    lat: null,
    lng: null,
    description: "Copper Alloy coin. (whole) Head of Septimius Severus, laureate, right; beaded border. (obverse) Ithyphallic Priapus walking left, right hand outstretched and left hand pulling back his cloak; beaded border. (reverse)"
  },
  {
    path: "Images/314 reconstructed.png",
    objectId: 314,
    tags: [],
    objectType: "altar",
    lat: null,
    lng: null,
    description: "Marble altar dedicated to Diana by Aurelius Thimoteus. The scenes on the sides of the altar show a satyr giving a drink to a boy, a man pouring liquid from an amphora in to a barrel, while a woman waits with a small jar, and a woman sacrificing a cockerel to the fertility god Priapus. A votive square alter sacred to the Goddess Diana, as it appears by the Inscription, which is engraved on one of the sides, and is transcribed as follows. The other three sides present in bas relief compositions allusive to the Eleusinian Mysteries, recognising in the alternate revolutions of dissolution and reproduction in nature the powers of the Supreme Deity, by which he regulates the universe. It is about twenty inches high, and was brought from Rome to England by the first Lord Holland 1761"
  },
  {
    path: "Images/314.png",
    objectId: 314,
    tags: [],
    objectType: "altar",
    lat: null,
    lng: null,
    description: "Marble altar dedicated to Diana by Aurelius Thimoteus. The scenes on the sides of the altar show a satyr giving a drink to a boy, a man pouring liquid from an amphora in to a barrel, while a woman waits with a small jar, and a woman sacrificing a cockerel to the fertility god Priapus. A votive square alter sacred to the Goddess Diana, as it appears by the Inscription, which is engraved on one of the sides, and is transcribed as follows. The other three sides present in bas relief compositions allusive to the Eleusinian Mysteries, recognising in the alternate revolutions of dissolution and reproduction in nature the powers of the Supreme Deity, by which he regulates the universe. It is about twenty inches high, and was brought from Rome to England by the first Lord Holland 1761"
  },
  {
    path: "Images/315.jpg",
    objectId: 315,
    tags: [],
    objectType: "bowl",
    lat: null,
    lng: null,
    description: "Fluted silver washing-bowl with a central medallion of Venus with Cupid and Priapus. The graffito \"Eugrafi\" on the base may refer to a Greek craftsman, Eugraphios."
  },
  {
    path: "Images/316.jpg",
    objectId: 316,
    tags: [],
    objectType: "sarcophagus",
    lat: null,
    lng: null,
    description: "Detail of Marble sarcophagus of Marconiana Serveriana from Vigna Casali. 3rd century CE. Los Angeles, Getty Museum."
  },
  {
    path: "Images/319.jpg",
    objectId: 319,
    tags: [],
    objectType: "figure, forgery",
    lat: null,
    lng: null,
    description: "Fake bronze two-part figure of Priapus: the top part is a bearded head and cloak, which lifts off to reveal a phallus. Matt suggested to look into cucullati if the priapus figure is hooded and found in Gaul, but not in this case."
  },
  {
    path: "Images/320.jpg",
    objectId: 320,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Figure; porcelain(?); terminal Priapus; loop at back."
  },
  {
    path: "Images/321a2.jpg",
    objectId: 321,
    tags: [],
    objectType: "bust",
    lat: null,
    lng: null,
    description: "Faience bust of Priapus"
  },
  {
    path: "Images/322.jpg",
    objectId: 322,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of dwarf, perhaps Priapus, carrying basket, tang beneath base."
  },
  {
    path: "Images/323.jpg",
    objectId: 323,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze terminal figure of Priapus emerging from a pillar, and sacrificing."
  },
  {
    path: "Images/324a2.jpg",
    objectId: 324,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze ithyphallic figure, perhaps Priapus, carrying fruit."
  },
  {
    path: "Images/324b.jpg",
    objectId: 324,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze ithyphallic figure, perhaps Priapus, carrying fruit."
  },
  {
    path: "Images/326.jpg",
    objectId: 326,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Hollow cast in low relief, made of lead; featuring draped male figure with gown his held up revealing phallus; worship of Priapus(?)."
  },
  {
    path: "Images/327.jpg",
    objectId: 327,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Figure of woman; lead; woman with legs akimbo engaged in worship of Priapus."
  },
  {
    path: "Images/328a.jpg",
    objectId: 328,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Fake bronze two-part figure of Priapus: the top part is a bearded head and cloak, which lifts off to reveal a phallus."
  },
  {
    path: "Images/328b.jpg",
    objectId: 328,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Fake bronze two-part figure of Priapus: the top part is a bearded head and cloak, which lifts off to reveal a phallus."
  },
  {
    path: "Images/328c.jpg",
    objectId: 328,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Fake bronze two-part figure of Priapus: the top part is a bearded head and cloak, which lifts off to reveal a phallus."
  },
  {
    path: "Images/328d.jpg",
    objectId: 328,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Fake bronze two-part figure of Priapus: the top part is a bearded head and cloak, which lifts off to reveal a phallus."
  },
  {
    path: "Images/329a2.jpg",
    objectId: 329,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus seated upon globe."
  },
  {
    path: "Images/329b.jpg",
    objectId: 329,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus seated upon globe."
  },
  {
    path: "Images/330a.jpg",
    objectId: 330,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of a young Priapus."
  },
  {
    path: "Images/330b.jpg",
    objectId: 330,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of a young Priapus."
  },
  {
    path: "Images/331.jpg",
    objectId: 331,
    tags: [],
    objectType: "figure; forgery",
    lat: null,
    lng: null,
    description: "Fake bronze figure of Priapus balancing fruit on his erect phallus."
  },
  {
    path: "Images/332.jpg",
    objectId: 332,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with Priapos raising his drapery with both hands."
  },
  {
    path: "Images/334.jpg",
    objectId: 334,
    tags: [],
    objectType: "intaglio",
    lat: null,
    lng: null,
    description: "Fragment of a chalcedony intaglio: sacrifice to Priapus; three female figures, an altar, and a term in a tree."
  },
  {
    path: "Images/335.jpg",
    objectId: 335,
    tags: [],
    objectType: "mask",
    lat: null,
    lng: null,
    description: "Mask; terracotta; on back: terminal Priapus; inscription in Greek; naked woman involved in sacrifice."
  },
  {
    path: "Images/336a2.jpg",
    objectId: 336,
    tags: [],
    objectType: "pendant",
    lat: null,
    lng: null,
    description: "Bronze votive figure of Priapus; large loop at back."
  },
  {
    path: "Images/336b.jpg",
    objectId: 336,
    tags: [],
    objectType: "pendant",
    lat: null,
    lng: null,
    description: "Bronze votive figure of Priapus; large loop at back."
  },
  {
    path: "Images/337.jpg",
    objectId: 337,
    tags: [],
    objectType: "votive figure",
    lat: null,
    lng: null,
    description: "Bronze votive figure of Priapus carrying tray with left hand."
  },
  {
    path: "Images/342.jpg",
    objectId: 342,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Wooden Priapus from the Plainer A shipwreck. Marsilles, Roman Dock Museum."
  },
  {
    path: "Images/35.png",
    objectId: 35,
    tags: [],
    objectType: "gem",
    lat: 41.39018622,
    lng: 13.62243001,
    description: "Sard gem engraved with a draped seated figure holding a thyrsos; behind is a smaller draped figure holding an object and a pole over the shoulder, from which hangs a basket (?). On the right is a small terminal figure on a column, perhaps Priapos (?)."
  },
  {
    path: "Images/36.png",
    objectId: 36,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta figure of ithyphallic male (Harpokrates) wearing long (to mid-calf) tunic, advancing on a double (stepped) base with phallus touching the base. Left arm cradles an oval pot(?) against his hip and upper body, and he leans (?) against an architectural element (horned altar) to his left. A small animal(?) may be to his left below (and in front of) the architectural feature. The figure's right arm hangs to the side holding a (broken and now missing) phiale (? or animal?) in his hand. Adjacent to the right foot a piece of shrubbery possibly existed (now broken). Represents an ithyphallic deity (Harpokrates) or possibly devotee of that cult (processional/ heophoros, a cultist carrying a statue of a god). Mould-made with an open back. Hand-tooling used to clean up the plaque and to emphasize some features such as the feet. Traces of white paint on man's garment. Well levigated Nile Delta silt. Interior surface and fabric range from 7.5R 5/6 (Red) to 5YR 5/3 (Reddish Brown) with c. 7.5YR 4/2 (Weak Red) core. Tempered with fine (sand-size to 1 mm) white, gray and red grit, with frequent micaceous inclusions of similar size. The head of the male is not preserved above the bridge of the nose."
  },
  {
    path: "Images/363d.jpeg",
    objectId: 363,
    tags: [],
    objectType: "sarcophagus",
    lat: null,
    lng: null,
    description: "149. (= Ariadne 139, = Pan 218*) Sarcophagus of Maconiana Severiana, marble. Malibu, Getty Mus.  83.AA.275. - SarkRel IV 3 (1969) no. 214 pl. 223, 2; Koch, G., The]. Paul Getty Museum. Roman Funerary Sculpture (1988) no. 13; Walker, S., in Roman Funerary Monuments in the]. Paul Getty Mus. I (1990) 83  -94. - Middle Severan. - P. herm on high pedestal decorated with garland (mantle around torso), in front altar with fruit basket on it, to which satyr draws a goat. At Dionysian mysteries"
  },
  {
    path: "Images/37.png",
    objectId: 37,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Egyptian terracotta figure of Priapus with headdress and moustache. Head only. Mould-made and hollow.Traces of white coating, traces of red paint. Dark red-brown Nile silt fabric with grey core. Abundant fine gold mica, quartz and white inclusions."
  },
  {
    path: "Images/377 b.jpg",
    objectId: 377,
    tags: [],
    objectType: "fresco",
    lat: null,
    lng: null,
    description: "V.6.12 Pompeii. House with paintings of Priapus, Leda and Narcissus. V.6.12 Pompeii. October 2020. Detail of painted upper north wall of entrance fauces/corridor. Photo courtesy of Klaus Heese."
  },
  {
    path: "Images/377.jpg",
    objectId: 377,
    tags: [],
    objectType: "fresco",
    lat: null,
    lng: null,
    description: "V.6.12 Pompeii. House with paintings of Priapus, Leda and Narcissus. V.6.12 Pompeii. October 2020. Detail of painted upper north wall of entrance fauces/corridor. Photo courtesy of Klaus Heese."
  },
  {
    path: "Images/378.jpg",
    objectId: 378,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "On the right, a naked silenus sitting under a tree. His left hand is resting on the rocky base, while his right hand holds a zither on his thigh. A moulded pillar divides the scene in the centre. At the top is a statue of an ithyphallic Priape holding a thyrse. To the left sits a nymph, or muse. She holds a mask of a silenus in her right hand. The border, included between two grenetis, is decorated with godrons curved like commas. A fastening system on the back."
  },
  {
    path: "Images/379.jpg",
    objectId: 379,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/380.jpg",
    objectId: 380,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/381.jpg",
    objectId: 381,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/382.jpg",
    objectId: 382,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/383.jpg",
    objectId: 383,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/384.jpg",
    objectId: 384,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/385.jpg",
    objectId: 385,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/386.jpg",
    objectId: 386,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/387.jpg",
    objectId: 387,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/388.jpg",
    objectId: 388,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/389.jpg",
    objectId: 389,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/390.jpg",
    objectId: 390,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/391.jpg",
    objectId: 391,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/392.jpg",
    objectId: 392,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/393.jpg",
    objectId: 393,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/394.jpg",
    objectId: 394,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/395.jpg",
    objectId: 395,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/396.JPG",
    objectId: 396,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/397.jpg",
    objectId: 397,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/398.jpg",
    objectId: 398,
    tags: [],
    objectType: "cup",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/399.jpg",
    objectId: 399,
    tags: [],
    objectType: "amphora with relief",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/4.png",
    objectId: 4,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining Ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould. Nile Delta brown silt with grey core and abundant gold mica, organics, quartz and white inclusions."
  },
  {
    path: "Images/400.jpg",
    objectId: 400,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/402.JPG",
    objectId: 402,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/403.JPG",
    objectId: 403,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/404.JPG",
    objectId: 404,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/405.JPG",
    objectId: 405,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/406.JPG",
    objectId: 406,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/407.JPG",
    objectId: 407,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/408.JPG",
    objectId: 408,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/409.JPG",
    objectId: 409,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/410.JPG",
    objectId: 410,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/411.JPG",
    objectId: 411,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/412.JPG",
    objectId: 412,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/413.JPG",
    objectId: 413,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/414.JPG",
    objectId: 414,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/415.JPG",
    objectId: 415,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/416.JPG",
    objectId: 416,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/417.JPG",
    objectId: 417,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/418.JPG",
    objectId: 418,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/419.JPG",
    objectId: 419,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/42.png",
    objectId: 42,
    tags: [],
    objectType: "sealstone",
    lat: null,
    lng: null,
    description: "Fragmentary elongated sard sealstone engraved with a draped woman holding an amphora; in front of her is a cippus with a term of Priapus."
  },
  {
    path: "Images/420.JPG",
    objectId: 420,
    tags: [],
    objectType: "sarcophagus",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/422.JPG",
    objectId: 422,
    tags: [],
    objectType: "sarcophagus",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/423.JPG",
    objectId: 423,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/424.JPG",
    objectId: 424,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/425a.JPG",
    objectId: 425,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/425b.JPG",
    objectId: 425,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/426a.JPG",
    objectId: 426,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/426b.JPG",
    objectId: 426,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/427.JPG",
    objectId: 427,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/428.JPG",
    objectId: 428,
    tags: [],
    objectType: "back of mirror",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/429.JPG",
    objectId: 429,
    tags: [],
    objectType: "pied de ciste (foot of cista?)",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/430a.JPG",
    objectId: 430,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/430b.JPG",
    objectId: 430,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/431.JPG",
    objectId: 431,
    tags: [],
    objectType: "attachment to vase",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/432.JPG",
    objectId: 432,
    tags: [],
    objectType: "inscription over dentricles, architectural feature",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/433.JPG",
    objectId: 433,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/434.JPG",
    objectId: 434,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/435.JPG",
    objectId: 435,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/436.JPG",
    objectId: 436,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/437.JPG",
    objectId: 437,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/438.JPG",
    objectId: 438,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/439.JPG",
    objectId: 439,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/440a.JPG",
    objectId: 440,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/440b.JPG",
    objectId: 440,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/441.JPG",
    objectId: 441,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/442.JPG",
    objectId: 442,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/443.JPG",
    objectId: 443,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/444.jpg",
    objectId: 444,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/445.jpg",
    objectId: 445,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/446.jpg",
    objectId: 446,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: ""
  },
  {
    path: "Images/448a2.jpg",
    objectId: 448,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus holding up drapery to reveal genitals and support fruit."
  },
  {
    path: "Images/448b.jpg",
    objectId: 448,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Bronze figure of Priapus holding up drapery to reveal genitals and support fruit."
  },
  {
    path: "Images/449a.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449b.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449c.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449d.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449e.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449f.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449g.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449h.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449i.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449j.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449k.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449l.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/449m.jpeg",
    objectId: 449,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Allegorical relief"
  },
  {
    path: "Images/450a.jpeg",
    objectId: 450,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Black and white mosaic with Nile scene and pygmies"
  },
  {
    path: "Images/450b.jpeg",
    objectId: 450,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Black and white mosaic with Nile scene and pygmies"
  },
  {
    path: "Images/452a.jpeg",
    objectId: 452,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Mosaic with Pan and the nymph Pytis"
  },
  {
    path: "Images/452b.jpeg",
    objectId: 452,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Mosaic with Pan and the nymph Pytis"
  },
  {
    path: "Images/452c.jpeg",
    objectId: 452,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Mosaic with Pan and the nymph Pytis"
  },
  {
    path: "Images/452d.jpeg",
    objectId: 452,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Mosaic with Pan and the nymph Pytis"
  },
  {
    path: "Images/454a.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454b.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454c.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454d.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454e.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454f.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454g.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454h.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454i.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/454j.jpeg",
    objectId: 454,
    tags: [],
    objectType: "burial cippi",
    lat: null,
    lng: null,
    description: "Three phallic burial cippi with Etruscan inscriptions"
  },
  {
    path: "Images/455.JPG",
    objectId: 455,
    tags: [],
    objectType: "bowl",
    lat: null,
    lng: null,
    description: "Attic red figure bowl with satyr and maenad on one side, and maenad and ithyphallic mule on the other"
  },
  {
    path: "Images/456.JPG",
    objectId: 456,
    tags: [],
    objectType: "amphora",
    lat: null,
    lng: null,
    description: "Etruscan black figure amphora with homoerotic scene"
  },
  {
    path: "Images/457.JPG",
    objectId: 457,
    tags: [],
    objectType: "red-figure crater",
    lat: null,
    lng: null,
    description: "Bell red figure crater with banqueters and courtesan"
  },
  {
    path: "Images/458a.jpeg",
    objectId: 458,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of ithyphallic satyr"
  },
  {
    path: "Images/458b.jpeg",
    objectId: 458,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of ithyphallic satyr"
  },
  {
    path: "Images/459.JPG",
    objectId: 459,
    tags: [],
    objectType: "red-figure dish",
    lat: null,
    lng: null,
    description: "Attic red figure dish with erotic scene"
  },
  {
    path: "Images/46.jpg",
    objectId: 46,
    tags: [],
    objectType: "figure, plaque",
    lat: null,
    lng: null,
    description: "Egyptian terracotta figure of a male youth (Harpocrates?). He is carrying a musical instrument (tanbar, lute or guitar type instrument). He wears a robe, worn over his head to conceal his face, whilst his phallus (mostly lost, but likely macrophallic) is exposed. Mould-made from a two-piece mould and hollow with a circular vent hole in the crudely made back. Traces of a thick white coating and pink paint. Red-brown Nile silt fabric, with abundant mica and sand inclusions. Part of back and all of base are missing."
  },
  {
    path: "Images/460.JPG",
    objectId: 460,
    tags: [],
    objectType: "red-figure crater",
    lat: null,
    lng: null,
    description: "Bell red figure crater with popular scene from comedy"
  },
  {
    path: "Images/461.JPG",
    objectId: 461,
    tags: [],
    objectType: "votive",
    lat: null,
    lng: null,
    description: "Three terracotta breasts, anatomical ex-votos"
  },
  {
    path: "Images/462a.JPG",
    objectId: 462,
    tags: [],
    objectType: "votive",
    lat: null,
    lng: null,
    description: "Four terracotta wombs, anatomical ex-votos"
  },
  {
    path: "Images/462b.JPG",
    objectId: 462,
    tags: [],
    objectType: "votive",
    lat: null,
    lng: null,
    description: "Four terracotta wombs, anatomical ex-votos"
  },
  {
    path: "Images/463a.JPG",
    objectId: 463,
    tags: [],
    objectType: "votive",
    lat: null,
    lng: null,
    description: "Twenty-four terracotta phalluses, anatomical ex-votos"
  },
  {
    path: "Images/463b.JPG",
    objectId: 463,
    tags: [],
    objectType: "votive",
    lat: null,
    lng: null,
    description: "Twenty-four terracotta phalluses, anatomical ex-votos"
  },
  {
    path: "Images/464a.jpeg",
    objectId: 464,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr apprehending a maenad. (Possibly includes Priapus statue in the background.)"
  },
  {
    path: "Images/466a.jpeg",
    objectId: 466,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and nymph"
  },
  {
    path: "Images/466b.jpeg",
    objectId: 466,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and nymph"
  },
  {
    path: "Images/467a.jpeg",
    objectId: 467,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Old satyr and Hermaphrodite"
  },
  {
    path: "Images/467b.jpeg",
    objectId: 467,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Old satyr and Hermaphrodite"
  },
  {
    path: "Images/468.jpeg",
    objectId: 468,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and Hermaphrodite"
  },
  {
    path: "Images/469a.jpeg",
    objectId: 469,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr trying to unite with Hermaphrodite"
  },
  {
    path: "Images/469b.jpeg",
    objectId: 469,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr trying to unite with Hermaphrodite"
  },
  {
    path: "Images/469c.jpeg",
    objectId: 469,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr trying to unite with Hermaphrodite"
  },
  {
    path: "Images/470a.jpeg",
    objectId: 470,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and maenad"
  },
  {
    path: "Images/470b.jpeg",
    objectId: 470,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and maenad"
  },
  {
    path: "Images/470c.jpeg",
    objectId: 470,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr and maenad"
  },
  {
    path: "Images/471.jpeg",
    objectId: 471,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Drawing on red background of satyr and nymph"
  },
  {
    path: "Images/472.JPG",
    objectId: 472,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Apollo and Daphne"
  },
  {
    path: "Images/473.jpeg",
    objectId: 473,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Hermaprhodite"
  },
  {
    path: "Images/474.jpeg",
    objectId: 474,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "The Three Graces"
  },
  {
    path: "Images/475.JPG",
    objectId: 475,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Leda and the Swan"
  },
  {
    path: "Images/476a.jpeg",
    objectId: 476,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr embracing a maenad"
  },
  {
    path: "Images/476b.JPG",
    objectId: 476,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr embracing a maenad"
  },
  {
    path: "Images/476c.jpeg",
    objectId: 476,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Satyr embracing a maenad"
  },
  {
    path: "Images/477.jpeg",
    objectId: 477,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Mars and Venus"
  },
  {
    path: "Images/478.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478b.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478c.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478d.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478e.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478f.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/478h.jpeg",
    objectId: 478,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Caricature of Aeneas, Anchises and Ascanius"
  },
  {
    path: "Images/479.jpeg",
    objectId: 479,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Polyphemus and Galatea"
  },
  {
    path: "Images/48.jpg",
    objectId: 48,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Terracotta group of Aphrodite (her upper half missing), Eros holding a torch, and Priapus holding out fruit."
  },
  {
    path: "Images/480a.JPG",
    objectId: 480,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/480b.JPG",
    objectId: 480,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/480c.jpeg",
    objectId: 480,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/481a.jpeg",
    objectId: 481,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/481b.JPG",
    objectId: 481,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/481c.JPG",
    objectId: 481,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/482a.JPG",
    objectId: 482,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painting from banqueting couch with scenes of pygmies"
  },
  {
    path: "Images/483a.jpeg",
    objectId: 483,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with Pan mounted on an ithyphallic mule"
  },
  {
    path: "Images/483b.JPG",
    objectId: 483,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with Pan mounted on an ithyphallic mule"
  },
  {
    path: "Images/483c.jpeg",
    objectId: 483,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with Pan mounted on an ithyphallic mule"
  },
  {
    path: "Images/483d.jpeg",
    objectId: 483,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with Pan mounted on an ithyphallic mule"
  },
  {
    path: "Images/484a.JPG",
    objectId: 484,
    tags: [],
    objectType: "herm / table leg",
    lat: null,
    lng: null,
    description: "Grey marble herm, table leg"
  },
  {
    path: "Images/484b.jpeg",
    objectId: 484,
    tags: [],
    objectType: "herm / table leg",
    lat: null,
    lng: null,
    description: "Grey marble herm, table leg"
  },
  {
    path: "Images/485a.JPG",
    objectId: 485,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group of satyr and nymph"
  },
  {
    path: "Images/485b.JPG",
    objectId: 485,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group of satyr and nymph"
  },
  {
    path: "Images/485c.JPG",
    objectId: 485,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group of satyr and nymph"
  },
  {
    path: "Images/486.JPG",
    objectId: 486,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with so-called \"Alcibiades and courtesans\""
  },
  {
    path: "Images/487a.JPG",
    objectId: 487,
    tags: [],
    objectType: "statue",
    lat: null,
    lng: null,
    description: "Draped ithyphallic herm in purple marble"
  },
  {
    path: "Images/487b.JPG",
    objectId: 487,
    tags: [],
    objectType: "statue",
    lat: null,
    lng: null,
    description: "Draped ithyphallic herm in purple marble"
  },
  {
    path: "Images/487c.jpeg",
    objectId: 487,
    tags: [],
    objectType: "statue",
    lat: null,
    lng: null,
    description: "Draped ithyphallic herm in purple marble"
  },
  {
    path: "Images/487d.jpeg",
    objectId: 487,
    tags: [],
    objectType: "statue",
    lat: null,
    lng: null,
    description: "Draped ithyphallic herm in purple marble"
  },
  {
    path: "Images/487e.jpeg",
    objectId: 487,
    tags: [],
    objectType: "statue",
    lat: null,
    lng: null,
    description: "Draped ithyphallic herm in purple marble"
  },
  {
    path: "Images/488a.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/488b.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/488c.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/488d.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/488e.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/488f.jpeg",
    objectId: 488,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble relief with nymph and old satyr"
  },
  {
    path: "Images/489a.jpeg",
    objectId: 489,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group with Pan and goat"
  },
  {
    path: "Images/489b.jpeg",
    objectId: 489,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group with Pan and goat"
  },
  {
    path: "Images/489c.jpeg",
    objectId: 489,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Marble group with Pan and goat"
  },
  {
    path: "Images/49.jpg",
    objectId: 49,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta figure of Priapus. A very small figure of a bald and bearded Priapus wearing a wreath, standing astride and wrapped in a himation, the front of which is held up by his upright phallus, leaving his legs bare, the drapery at his back showing between them. His right arm is bent up within his garment, the lowered left arm is exposed. The right leg below the knee and the left foot are lost; there is damage to the left side of the head. It is uncertain whether the upper back and the rear of the head have split away from the front or whether they were attached to some object: below them is part of a curved piercing or groove running from side to side. This Priapus may be part of a decorative handle of a vessel or lamp; it may be an applied foot of a vessel, one element of three or four such feet. Solid; probably from a one-piece mould. Micaceous orange-brown Nile silt, with traces of a matt red slip."
  },
  {
    path: "Images/490a.jpeg",
    objectId: 490,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Two drawings on red background of Pan and goats"
  },
  {
    path: "Images/490b.jpeg",
    objectId: 490,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Two drawings on red background of Pan and goats"
  },
  {
    path: "Images/491.jpeg",
    objectId: 491,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Venus in a seashell with Cupid"
  },
  {
    path: "Images/492a.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/492b.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/492c.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/492d.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/492e.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/492f.jpeg",
    objectId: 492,
    tags: [],
    objectType: "sculptural group",
    lat: null,
    lng: null,
    description: "Venus \"in bikini\""
  },
  {
    path: "Images/493.jpeg",
    objectId: 493,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/494.jpeg",
    objectId: 494,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/494b.jpeg",
    objectId: 494,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/495.jpeg",
    objectId: 495,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/497a.jpeg",
    objectId: 497,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting with inscription"
  },
  {
    path: "Images/497b.jpeg",
    objectId: 497,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting with inscription"
  },
  {
    path: "Images/498a.jpeg",
    objectId: 498,
    tags: [],
    objectType: "graffito",
    lat: null,
    lng: null,
    description: "Wall graffito with erotic scene"
  },
  {
    path: "Images/498b.jpeg",
    objectId: 498,
    tags: [],
    objectType: "graffito",
    lat: null,
    lng: null,
    description: "Wall graffito with erotic scene"
  },
  {
    path: "Images/5.png",
    objectId: 5,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta figure of Ithyphalic Harpocrates. Mould-made plaque with solid, flat back. Head missing. White coating, painted pink. Nile delta red-brown silt with grey core and abundant gold mica, organics, quartz and white inclusions."
  },
  {
    path: "Images/50.jpg",
    objectId: 50,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Egyptian terracotta figure with the head of a bald man, possibly dancing. A caricatured head in 'grotesque' style. He has an elongated, long, narrow face, skull very deep, bald head, prominent nose (chipped) lips and large ears; the neck is comparatively thin. Solid, from two-piece mould, head made separately from the body. Thick white coating and yellow paint. Nile Delta brown silt with grey core and abundant gold mica, organics, quartz and white inclusions. Lost arms, plaster aheres to left arm stub."
  },
  {
    path: "Images/501a.jpeg",
    objectId: 501,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/501b.jpeg",
    objectId: 501,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/502.jpeg",
    objectId: 502,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Small erotic painting"
  },
  {
    path: "Images/503.jpeg",
    objectId: 503,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble bas relief with erotic scene"
  },
  {
    path: "Images/503b.jpeg",
    objectId: 503,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble bas relief with erotic scene"
  },
  {
    path: "Images/503c.jpeg",
    objectId: 503,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble bas relief with erotic scene"
  },
  {
    path: "Images/504a.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504b.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504c.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504d.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504e.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504f.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/504g.jpeg",
    objectId: 504,
    tags: [],
    objectType: "tripod table",
    lat: null,
    lng: null,
    description: "tripod with ithyphallic satyrs"
  },
  {
    path: "Images/506.jpeg",
    objectId: 506,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of blockhead"
  },
  {
    path: "Images/506b.jpeg",
    objectId: 506,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of blockhead"
  },
  {
    path: "Images/506c.jpeg",
    objectId: 506,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of blockhead"
  },
  {
    path: "Images/506d.jpeg",
    objectId: 506,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of blockhead"
  },
  {
    path: "Images/507.jpeg",
    objectId: 507,
    tags: [],
    objectType: "priapic drinking vessel",
    lat: null,
    lng: null,
    description: "two earthenware vases featuring grotesque and ithyphallic dwarves"
  },
  {
    path: "Images/507b.jpeg",
    objectId: 507,
    tags: [],
    objectType: "priapic drinking vessel",
    lat: null,
    lng: null,
    description: "two earthenware vases featuring grotesque and ithyphallic dwarves"
  },
  {
    path: "Images/507c.jpeg",
    objectId: 507,
    tags: [],
    objectType: "priapic drinking vessel",
    lat: null,
    lng: null,
    description: "two earthenware vases featuring grotesque and ithyphallic dwarves"
  },
  {
    path: "Images/507d.jpeg",
    objectId: 507,
    tags: [],
    objectType: "priapic drinking vessel",
    lat: null,
    lng: null,
    description: "two earthenware vases featuring grotesque and ithyphallic dwarves"
  },
  {
    path: "Images/507e.jpeg",
    objectId: 507,
    tags: [],
    objectType: "priapic drinking vessel",
    lat: null,
    lng: null,
    description: "two earthenware vases featuring grotesque and ithyphallic dwarves"
  },
  {
    path: "Images/508.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508a.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508b.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508c.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508d.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508e.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/508f.jpeg",
    objectId: 508,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "two statuettes of dancing dwarves"
  },
  {
    path: "Images/509a.jpeg",
    objectId: 509,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "bronze tintinnabulum of Mercury riding an ithyphallic ram"
  },
  {
    path: "Images/509b.jpeg",
    objectId: 509,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "bronze tintinnabulum of Mercury riding an ithyphallic ram"
  },
  {
    path: "Images/509c.jpeg",
    objectId: 509,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "bronze tintinnabulum of Mercury riding an ithyphallic ram"
  },
  {
    path: "Images/51.jpg",
    objectId: 51,
    tags: [],
    objectType: "gem",
    lat: null,
    lng: null,
    description: "Sard gem engraved with a draped seated figure holding a thyrsos; behind is a smaller draped figure holding an object and a pole over the shoulder, from which hangs a basket (?). On the right is a small terminal figure on a column, perhaps Priapos (?)."
  },
  {
    path: "Images/510a.jpeg",
    objectId: 510,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum of satyr as a fighting cock"
  },
  {
    path: "Images/510b.jpeg",
    objectId: 510,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum of satyr as a fighting cock"
  },
  {
    path: "Images/510c.jpeg",
    objectId: 510,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum of satyr as a fighting cock"
  },
  {
    path: "Images/511a.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511b.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511c.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511d.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511e.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511f.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511g.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511h.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511i.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511j.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511k.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511l.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511m.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511m.JPG",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511n.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511n.JPG",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511o.jpeg",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/511p.JPG",
    objectId: 511,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Four bronze statuettes of bread pedlar"
  },
  {
    path: "Images/512.jpeg",
    objectId: 512,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Ivory statuette of Venus"
  },
  {
    path: "Images/512b.jpeg",
    objectId: 512,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Ivory statuette of Venus"
  },
  {
    path: "Images/515.jpeg",
    objectId: 515,
    tags: [],
    objectType: "vase handle",
    lat: null,
    lng: null,
    description: "Bronze vase handle with erotic scene"
  },
  {
    path: "Images/515b.jpeg",
    objectId: 515,
    tags: [],
    objectType: "vase handle",
    lat: null,
    lng: null,
    description: "Bronze vase handle with erotic scene"
  },
  {
    path: "Images/516.jpeg",
    objectId: 516,
    tags: [],
    objectType: "basin",
    lat: null,
    lng: null,
    description: "Bronze basin with erotic scene on the bottom"
  },
  {
    path: "Images/517 maybe.jpeg",
    objectId: 517,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with grotesque gladiator"
  },
  {
    path: "Images/519a.jpeg",
    objectId: 519,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with hump-backed ithyphallic dwarf. Saw at New Light on Pompeii: \"Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp.\""
  },
  {
    path: "Images/519b.JPG",
    objectId: 519,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with hump-backed ithyphallic dwarf. Saw at New Light on Pompeii: \"Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp.\""
  },
  {
    path: "Images/519c.JPG",
    objectId: 519,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with hump-backed ithyphallic dwarf. Saw at New Light on Pompeii: \"Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp.\""
  },
  {
    path: "Images/519d.jpeg",
    objectId: 519,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with hump-backed ithyphallic dwarf. Saw at New Light on Pompeii: \"Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp.\""
  },
  {
    path: "Images/519f.JPG",
    objectId: 519,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with hump-backed ithyphallic dwarf. Saw at New Light on Pompeii: \"Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp.\""
  },
  {
    path: "Images/52.jpg",
    objectId: 52,
    tags: [],
    objectType: "sealstone",
    lat: null,
    lng: null,
    description: "Sealstone of glass paste imitating banded sard, engraved with Eros pouring a libation on a flaming altar, above which is a figure of Priapus."
  },
  {
    path: "Images/520.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520b.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520c.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520d.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520e.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520f.jpg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520g.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520h.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520i.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520j.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520k.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520l.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520m.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520n.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520o.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520p.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520q.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520r.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520s.JPG",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520t.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520u.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520v.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520w.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/520x.jpeg",
    objectId: 520,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Saw in GS: \"Three bronze oil lamps with dancing dwarf.\" (27872). Saw in New Light on Pompeii: \"Lamp of a tintinnabulum in the shape of an ithyphallic man\". (27870, 27871)"
  },
  {
    path: "Images/523.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/523b.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/523c.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/523d.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/523e.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/523f.jpeg",
    objectId: 523,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Two bronze tintinnabula with grotesque jockey"
  },
  {
    path: "Images/524.jpeg",
    objectId: 524,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with bird-phallus-quadruped"
  },
  {
    path: "Images/524b.jpeg",
    objectId: 524,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with bird-phallus-quadruped"
  },
  {
    path: "Images/524c.jpeg",
    objectId: 524,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with bird-phallus-quadruped"
  },
  {
    path: "Images/525.jpeg",
    objectId: 525,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with mouse and tortoise"
  },
  {
    path: "Images/525b.jpeg",
    objectId: 525,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with mouse and tortoise"
  },
  {
    path: "Images/526.jpeg",
    objectId: 526,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum"
  },
  {
    path: "Images/527.jpeg",
    objectId: 527,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with phallus-chimera"
  },
  {
    path: "Images/527b.jpeg",
    objectId: 527,
    tags: [],
    objectType: "tintinnabulum",
    lat: null,
    lng: null,
    description: "Bronze tintinnabulum with phallus-chimera"
  },
  {
    path: "Images/528.jpeg",
    objectId: 528,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with grotesque intellectual"
  },
  {
    path: "Images/528b.jpeg",
    objectId: 528,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with grotesque intellectual"
  },
  {
    path: "Images/528c.jpeg",
    objectId: 528,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with grotesque intellectual"
  },
  {
    path: "Images/529.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529b.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529c.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529d.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529e.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529f.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529h.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529i.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/529j.jpeg",
    objectId: 529,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracotta oil lamps with grotesque satyr"
  },
  {
    path: "Images/53.jpg",
    objectId: 53,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Egyptian terracotta figure of bearded man wearing festival wreath headdress, possibly a representation of Priapus. Head only. Mould-made and solid with crude back. Dark red-brown Nile silt fabric with grey core, abundant mica, quartz, organics and white inclusions."
  },
  {
    path: "Images/530.jpeg",
    objectId: 530,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Three terracottta oil lamps with erotic scene"
  },
  {
    path: "Images/531.jpeg",
    objectId: 531,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Two terracottta oil lamps with erotic scene"
  },
  {
    path: "Images/532.jpeg",
    objectId: 532,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with erotic scene"
  },
  {
    path: "Images/533.jpeg",
    objectId: 533,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/534.jpeg",
    objectId: 534,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/534b.jpeg",
    objectId: 534,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/535.jpeg",
    objectId: 535,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot"
  },
  {
    path: "Images/535b.jpeg",
    objectId: 535,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot"
  },
  {
    path: "Images/535c.jpeg",
    objectId: 535,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot"
  },
  {
    path: "Images/535d.jpeg",
    objectId: 535,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot"
  },
  {
    path: "Images/536.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/536b.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/536c.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/536d.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/536f.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/536h.jpeg",
    objectId: 536,
    tags: [],
    objectType: "pot",
    lat: null,
    lng: null,
    description: "Earthenware mask-shaped pot containing mobile phallus"
  },
  {
    path: "Images/537a.jpeg",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537b.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537c.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537d.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537e.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537f.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537g.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537h.jpeg",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537i.jpeg",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537j.jpeg",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/537k.JPG",
    objectId: 537,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Bronze statuette of Priapus"
  },
  {
    path: "Images/538.JPG",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538a.jpeg",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538b.JPG",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538c.JPG",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538d.JPG",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538e.jpeg",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/538f.jpeg",
    objectId: 538,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Modern copy of previous statuette"
  },
  {
    path: "Images/539.JPG",
    objectId: 539,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four terracotta figures of Priapus"
  },
  {
    path: "Images/539b.JPG",
    objectId: 539,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four terracotta figures of Priapus"
  },
  {
    path: "Images/54.jpg",
    objectId: 54,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Egyptian terracotta figure of Priapus standing. Priapus lifts his robe with his left arm to expose himself. His right arm is raised above his shoulder. A socket for a removable phallus is empty. Mould-made and hollow with a simple back. Traces of white coating and red-pink paint on robes. Red-brown Nile silt fabric with abundant mica and sand. Both arms, feet, base, head and phallus missing."
  },
  {
    path: "Images/540.JPG",
    objectId: 540,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Group of Eros and Psyche in terracotta"
  },
  {
    path: "Images/541.JPG",
    objectId: 541,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Couples kissing on banqueting couch in terracotta"
  },
  {
    path: "Images/541b.JPG",
    objectId: 541,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Couples kissing on banqueting couch in terracotta"
  },
  {
    path: "Images/542a.JPG",
    objectId: 542,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Phallic amulet in silver (labelled 11 in display case)"
  },
  {
    path: "Images/543a.JPG",
    objectId: 543,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two phallic amulets in bronze (labelled 12 and 13 in display case)"
  },
  {
    path: "Images/544a.JPG",
    objectId: 544,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet with heart-shaped pendants"
  },
  {
    path: "Images/544b.JPG",
    objectId: 544,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet with heart-shaped pendants"
  },
  {
    path: "Images/545a.jpeg",
    objectId: 545,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet"
  },
  {
    path: "Images/545b.JPG",
    objectId: 545,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet"
  },
  {
    path: "Images/545c.JPG",
    objectId: 545,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet"
  },
  {
    path: "Images/545d.jpeg",
    objectId: 545,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bronze phallic amulet"
  },
  {
    path: "Images/546.JPG",
    objectId: 546,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two double amulets in bronze with phalluses and arms"
  },
  {
    path: "Images/547.JPG",
    objectId: 547,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Double amulet in bronze with phallus and arm (labelled 18 in display cabinet)"
  },
  {
    path: "Images/548.JPG",
    objectId: 548,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Double amulet in bronze with phallus and arm (labelled 19 in display cabinet)"
  },
  {
    path: "Images/549.jpeg",
    objectId: 549,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Three phallic amulets in bone (labelled 20, 21 & 22 in display cabinet)"
  },
  {
    path: "Images/549a.JPG",
    objectId: 549,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Three phallic amulets in bone (labelled 20, 21 & 22 in display cabinet)"
  },
  {
    path: "Images/549b.JPG",
    objectId: 549,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Three phallic amulets in bone (labelled 20, 21 & 22 in display cabinet)"
  },
  {
    path: "Images/55.jpg",
    objectId: 55,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta mould-made figure. A standing satyr, modelled in the round, wearing a nebris fastened at the right shoulder by knotting the rear legs of the fawn, and belted at the waist, with the animal’s head hanging at his right hip and the forelegs dangling down the thigh at front and over the buttock at the rear. A himation is draped over his left shoulder, reaching the knee (with a weight) at the front; held up by his left arm, it falls at least as far as mid-calf (the legs are lost below this) at the back. His head is broken away; the arms, also largely lost, were added separately, the stumps finished in the mould, and a socket remains for his phallus. Details at the back are well-modelled. Hollow; two-piece mould. Micaceous brown Nile silt, with traces of a white dressing."
  },
  {
    path: "Images/550.jpeg",
    objectId: 550,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two amulets in faience in the form of male genitalia (should be labelled 23 & 24 in cabinet, but \"23\" is missing. So it's the top two on the acrylic board.)"
  },
  {
    path: "Images/550b.jpeg",
    objectId: 550,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two amulets in faience in the form of male genitalia (should be labelled 23 & 24 in cabinet, but \"23\" is missing. So it's the top two on the acrylic board.)"
  },
  {
    path: "Images/551.jpeg",
    objectId: 551,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Amulet in rock crystal in the form of male genitalia (labelled 25 in display cabinet)"
  },
  {
    path: "Images/552.jpeg",
    objectId: 552,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Hands in faience"
  },
  {
    path: "Images/553.jpeg",
    objectId: 553,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two-headed phallic amulet in wood (labelled 28 in display cabinet)"
  },
  {
    path: "Images/553aJPG.JPG",
    objectId: 553,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two-headed phallic amulet in wood (labelled 28 in display cabinet)"
  },
  {
    path: "Images/553d.JPG",
    objectId: 553,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two-headed phallic amulet in wood (labelled 28 in display cabinet)"
  },
  {
    path: "Images/554.JPG",
    objectId: 554,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two-headed phallic amulet in terracotta"
  },
  {
    path: "Images/554b.JPG",
    objectId: 554,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two-headed phallic amulet in terracotta"
  },
  {
    path: "Images/555.JPG",
    objectId: 555,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Double amulet in bone with leaf and phalus"
  },
  {
    path: "Images/555b.jpeg",
    objectId: 555,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Double amulet in bone with leaf and phalus"
  },
  {
    path: "Images/555c.JPG",
    objectId: 555,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Double amulet in bone with leaf and phalus"
  },
  {
    path: "Images/557.JPG",
    objectId: 557,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Amulet in bone with two-faced head and phallus"
  },
  {
    path: "Images/557b.JPG",
    objectId: 557,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Amulet in bone with two-faced head and phallus"
  },
  {
    path: "Images/557c.jpeg",
    objectId: 557,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Amulet in bone with two-faced head and phallus"
  },
  {
    path: "Images/557d.jpeg",
    objectId: 557,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Amulet in bone with two-faced head and phallus"
  },
  {
    path: "Images/558a.JPG",
    objectId: 558,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two phallic amulets in coral (labelled 33 & 34 in display cabinet, pink/coral coloured)"
  },
  {
    path: "Images/558b.JPG",
    objectId: 558,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Two phallic amulets in coral (labelled 33 & 34 in display cabinet, pink/coral coloured)"
  },
  {
    path: "Images/559.JPG",
    objectId: 559,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Bone phallic amulet"
  },
  {
    path: "Images/56.jpg",
    objectId: 56,
    tags: [],
    objectType: "figure, plaque",
    lat: null,
    lng: null,
    description: "Terracotta figure of Priapos. Priapos standing, his legs together and his belly thrust out. He looks down slightly to his right and his straggly beard falls on his chest. He wears a himation draped over his upper body, leaving his legs bare and his phallus rising over its lower edge. The mantle hides his left arm, which is akimbo, and covers his head. The top of the head, over which the himation was draped, is broken away; the shoulder of our figure may indicate that it had a raised right arm, probably but not certainly free of the himation. The back is plain, with part of the edge of a circular vent. Hollow; two-piece mould. Micaceous orange-brown Nile silt with some white grits."
  },
  {
    path: "Images/560.JPG",
    objectId: 560,
    tags: [],
    objectType: "amulet",
    lat: null,
    lng: null,
    description: "Series of six amulets in faience (labelled 36 in display cabinet, turquoise coloured amulets on board)"
  },
  {
    path: "Images/561a.jpeg",
    objectId: 561,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in red-painted tufa with inscription. Inscription text: \"hanc ego cacavi\" (ego cacavi = I took a shit; hanc = acc.f.s => what is this referring to? latrina/egesta/etc?)"
  },
  {
    path: "Images/561b.jpeg",
    objectId: 561,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in red-painted tufa with inscription. Inscription text: \"hanc ego cacavi\" (ego cacavi = I took a shit; hanc = acc.f.s => what is this referring to? latrina/egesta/etc?)"
  },
  {
    path: "Images/562.jpeg",
    objectId: 562,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painted shop sign with ass, lion, and the goddess Victory and a graffito with gladiator fight scene"
  },
  {
    path: "Images/563a.jpeg",
    objectId: 563,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in tufa"
  },
  {
    path: "Images/563b.jpeg",
    objectId: 563,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in tufa"
  },
  {
    path: "Images/564a.jpeg",
    objectId: 564,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in tufa in a small temple"
  },
  {
    path: "Images/564b.jpeg",
    objectId: 564,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief with phallus in tufa in a small temple"
  },
  {
    path: "Images/565.jpeg",
    objectId: 565,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Relief in travertine with phallus and inscription \"hic habitat felicitas\""
  },
  {
    path: "Images/566.jpeg",
    objectId: 566,
    tags: [],
    objectType: "wall painting",
    lat: null,
    lng: null,
    description: "Painted shop sign with Mercury"
  },
  {
    path: "Images/567a.jpeg",
    objectId: 567,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble bas-relief with goose, hen, duck and herm in the form of a cock"
  },
  {
    path: "Images/567b.jpeg",
    objectId: 567,
    tags: [],
    objectType: "relief",
    lat: null,
    lng: null,
    description: "Marble bas-relief with goose, hen, duck and herm in the form of a cock"
  },
  {
    path: "Images/568.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/568b.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/568c.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/568d.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/568e.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/568f.jpeg",
    objectId: 568,
    tags: [],
    objectType: "miniature bust",
    lat: null,
    lng: null,
    description: "Small bronze head with a phallus on the forehead"
  },
  {
    path: "Images/569.jpeg",
    objectId: 569,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "Small bronze scene of sodomy"
  },
  {
    path: "Images/570.jpeg",
    objectId: 570,
    tags: [],
    objectType: "mirror",
    lat: null,
    lng: null,
    description: "Engraved bronze mirror with erotic scene"
  },
  {
    path: "Images/571.jpeg",
    objectId: 571,
    tags: [],
    objectType: "pendant",
    lat: null,
    lng: null,
    description: "Two bronze ox head pendants with phalluses in their mouth"
  },
  {
    path: "Images/571b.jpeg",
    objectId: 571,
    tags: [],
    objectType: "pendant",
    lat: null,
    lng: null,
    description: "Two bronze ox head pendants with phalluses in their mouth"
  },
  {
    path: "Images/571c.jpeg",
    objectId: 571,
    tags: [],
    objectType: "pendant",
    lat: null,
    lng: null,
    description: "Two bronze ox head pendants with phalluses in their mouth"
  },
  {
    path: "Images/572.jpeg",
    objectId: 572,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with erotic scene"
  },
  {
    path: "Images/572b.jpeg",
    objectId: 572,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Terracotta oil lamp with erotic scene"
  },
  {
    path: "Images/573.jpeg",
    objectId: 573,
    tags: [],
    objectType: "lamp",
    lat: null,
    lng: null,
    description: "Black varnish oil lamp with winged phallus"
  },
  {
    path: "Images/574a.jpeg",
    objectId: 574,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Grotesque Harpocrates in soapstone"
  },
  {
    path: "Images/574b.jpeg",
    objectId: 574,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Grotesque Harpocrates in soapstone"
  },
  {
    path: "Images/574c.jpeg",
    objectId: 574,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Grotesque Harpocrates in soapstone"
  },
  {
    path: "Images/574d.jpeg",
    objectId: 574,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Grotesque Harpocrates in soapstone"
  },
  {
    path: "Images/575a.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575b.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575c.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575d.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575e.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575f.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575g.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575h.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575i.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/575j.jpeg",
    objectId: 575,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Four seated dwarves (Harpocrates?) in soapstone"
  },
  {
    path: "Images/576a.jpeg",
    objectId: 576,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Double hump-backed dwarf in soapstone"
  },
  {
    path: "Images/576b.jpeg",
    objectId: 576,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Double hump-backed dwarf in soapstone"
  },
  {
    path: "Images/576c.jpeg",
    objectId: 576,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Double hump-backed dwarf in soapstone"
  },
  {
    path: "Images/577a.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577b.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577c.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577d.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577e.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577f.jpeg",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/577g.JPG",
    objectId: 577,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea con la parte superiore de corpo invertita respetto a quella inferiore\" (Bronze statuette with his butt on backwards)"
  },
  {
    path: "Images/578a.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578b.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578c.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578d.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578e.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578f.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578g.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578h.jpeg",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/578i.JPG",
    objectId: 578,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "\"Statuetta bronzea di Priapo con tunica da giardiniere che scopre il fallo\""
  },
  {
    path: "Images/579a.jpeg",
    objectId: 579,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Herms depicted in mosaic theatre scene. \"Mosaic emblema in opus vermiculatum made from polychrome tesserae showing actors preparing for a satyr play. An elderly choregos (the producer or financier of a theatrical work) is seated between tragic masks and masks of Silenus. He teaches two young actors who are wearing a goat leather costume; at the centre, a character dressed in a tunic with a mask and a wreath on his head plays the double flute; to the right, another youth helps an actor put on a Silenus costume. The scene unfolds in front of a portico with ionic columns, from which shields and wreaths hang; vases and herms can be seen on the architrave."
  },
  {
    path: "Images/579b.jpeg",
    objectId: 579,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Herms depicted in mosaic theatre scene. \"Mosaic emblema in opus vermiculatum made from polychrome tesserae showing actors preparing for a satyr play. An elderly choregos (the producer or financier of a theatrical work) is seated between tragic masks and masks of Silenus. He teaches two young actors who are wearing a goat leather costume; at the centre, a character dressed in a tunic with a mask and a wreath on his head plays the double flute; to the right, another youth helps an actor put on a Silenus costume. The scene unfolds in front of a portico with ionic columns, from which shields and wreaths hang; vases and herms can be seen on the architrave."
  },
  {
    path: "Images/579c.jpeg",
    objectId: 579,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Herms depicted in mosaic theatre scene. \"Mosaic emblema in opus vermiculatum made from polychrome tesserae showing actors preparing for a satyr play. An elderly choregos (the producer or financier of a theatrical work) is seated between tragic masks and masks of Silenus. He teaches two young actors who are wearing a goat leather costume; at the centre, a character dressed in a tunic with a mask and a wreath on his head plays the double flute; to the right, another youth helps an actor put on a Silenus costume. The scene unfolds in front of a portico with ionic columns, from which shields and wreaths hang; vases and herms can be seen on the architrave."
  },
  {
    path: "Images/579d.JPG",
    objectId: 579,
    tags: [],
    objectType: "mosaic",
    lat: null,
    lng: null,
    description: "Herms depicted in mosaic theatre scene. \"Mosaic emblema in opus vermiculatum made from polychrome tesserae showing actors preparing for a satyr play. An elderly choregos (the producer or financier of a theatrical work) is seated between tragic masks and masks of Silenus. He teaches two young actors who are wearing a goat leather costume; at the centre, a character dressed in a tunic with a mask and a wreath on his head plays the double flute; to the right, another youth helps an actor put on a Silenus costume. The scene unfolds in front of a portico with ionic columns, from which shields and wreaths hang; vases and herms can be seen on the architrave."
  },
  {
    path: "Images/580a.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580b.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580c.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580d.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580e.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580f.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580g.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580h.jpeg",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580i.JPG",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580j.JPG",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/580k.JPG",
    objectId: 580,
    tags: [],
    objectType: "Attic red-figure oinochoe",
    lat: null,
    lng: null,
    description: "Eurymedon Vase. Side A: man advances holding his erect phallus. Side B: Persian archer in submissive pose and Greek inscription \"I am Eurymedon, I stay bowed down.\" Pottery, unknown provenance, c.460BCE."
  },
  {
    path: "Images/581a.jpeg",
    objectId: 581,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Trapezophoron (table leg) with depiction of a hermaphrodite). Marble. Second half of the first century BC. Pompeii, Caupona di Astylus/tavern (III 8, 8)"
  },
  {
    path: "Images/581b.jpeg",
    objectId: 581,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Trapezophoron (table leg) with depiction of a hermaphrodite). Marble. Second half of the first century BC. Pompeii, Caupona di Astylus/tavern (III 8, 8)"
  },
  {
    path: "Images/581c.jpeg",
    objectId: 581,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Trapezophoron (table leg) with depiction of a hermaphrodite). Marble. Second half of the first century BC. Pompeii, Caupona di Astylus/tavern (III 8, 8)"
  },
  {
    path: "Images/582a.JPG",
    objectId: 582,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Meleager and Atlanta, lovers resting after the hunt of the Calydonian boar. Fresco. 1st cent. AD. Pompeii, House of the Dancing girls (VI 2, 22)"
  },
  {
    path: "Images/583.JPG",
    objectId: 583,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hippolytus and Phaedra confessing her love to her stepson as he sets off on a hunt. Fresco, 1st century AD. Pompeii."
  },
  {
    path: "Images/583b.JPG",
    objectId: 583,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hippolytus and Phaedra confessing her love to her stepson as he sets off on a hunt. Fresco, 1st century AD. Pompeii."
  },
  {
    path: "Images/583c.JPG",
    objectId: 583,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hippolytus and Phaedra confessing her love to her stepson as he sets off on a hunt. Fresco, 1st century AD. Pompeii."
  },
  {
    path: "Images/584a.JPG",
    objectId: 584,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Erotic graffiti in Greek. \"If a person becomes beautiful and does not engage in pederasty, when they fall in love with a beautiful woman they are not going to score.\" Painted and incised plaster. 1st cent AD. Stabiae, Villa Arianna."
  },
  {
    path: "Images/584c.JPG",
    objectId: 584,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Erotic graffiti in Greek. \"If a person becomes beautiful and does not engage in pederasty, when they fall in love with a beautiful woman they are not going to score.\" Painted and incised plaster. 1st cent AD. Stabiae, Villa Arianna."
  },
  {
    path: "Images/584d.JPG",
    objectId: 584,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Erotic graffiti in Greek. \"If a person becomes beautiful and does not engage in pederasty, when they fall in love with a beautiful woman they are not going to score.\" Painted and incised plaster. 1st cent AD. Stabiae, Villa Arianna."
  },
  {
    path: "Images/584e.JPG",
    objectId: 584,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Erotic graffiti in Greek. \"If a person becomes beautiful and does not engage in pederasty, when they fall in love with a beautiful woman they are not going to score.\" Painted and incised plaster. 1st cent AD. Stabiae, Villa Arianna."
  },
  {
    path: "Images/584f.JPG",
    objectId: 584,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Erotic graffiti in Greek. \"If a person becomes beautiful and does not engage in pederasty, when they fall in love with a beautiful woman they are not going to score.\" Painted and incised plaster. 1st cent AD. Stabiae, Villa Arianna."
  },
  {
    path: "Images/585a.JPG",
    objectId: 585,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hairpins depicting Aphrodite or Venus Anadyomene (wringing her hair as she comes out of the sea). Bone. 1st cent. AD. Pompeii."
  },
  {
    path: "Images/585b.jpeg",
    objectId: 585,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hairpins depicting Aphrodite or Venus Anadyomene (wringing her hair as she comes out of the sea). Bone. 1st cent. AD. Pompeii."
  },
  {
    path: "Images/585c.jpeg",
    objectId: 585,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hairpins depicting Aphrodite or Venus Anadyomene (wringing her hair as she comes out of the sea). Bone. 1st cent. AD. Pompeii."
  },
  {
    path: "Images/585e.JPG",
    objectId: 585,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hairpins depicting Aphrodite or Venus Anadyomene (wringing her hair as she comes out of the sea). Bone. 1st cent. AD. Pompeii."
  },
  {
    path: "Images/585f.JPG",
    objectId: 585,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Hairpins depicting Aphrodite or Venus Anadyomene (wringing her hair as she comes out of the sea). Bone. 1st cent. AD. Pompeii."
  },
  {
    path: "Images/586a.JPG",
    objectId: 586,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Rod depicting Approdite or Venus Anadyomene (wringing her hair as she comes out of the sea), possibly the latch of a box for cosmetics. Bronze. 1st cent AD. Pompei, Casa Imperiale (I, 11, 18)"
  },
  {
    path: "Images/586b.JPG",
    objectId: 586,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Rod depicting Approdite or Venus Anadyomene (wringing her hair as she comes out of the sea), possibly the latch of a box for cosmetics. Bronze. 1st cent AD. Pompei, Casa Imperiale (I, 11, 18)"
  },
  {
    path: "Images/586c.JPG",
    objectId: 586,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Rod depicting Approdite or Venus Anadyomene (wringing her hair as she comes out of the sea), possibly the latch of a box for cosmetics. Bronze. 1st cent AD. Pompei, Casa Imperiale (I, 11, 18)"
  },
  {
    path: "Images/587a.jpeg",
    objectId: 587,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD. Pompeii VIII (dump outside the Temple of Venus)."
  },
  {
    path: "Images/587b.JPG",
    objectId: 587,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD. Pompeii VIII (dump outside the Temple of Venus)."
  },
  {
    path: "Images/587c.JPG",
    objectId: 587,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD. Pompeii VIII (dump outside the Temple of Venus)."
  },
  {
    path: "Images/587d.jpeg",
    objectId: 587,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD. Pompeii VIII (dump outside the Temple of Venus)."
  },
  {
    path: "Images/587e.JPG",
    objectId: 587,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD. Pompeii VIII (dump outside the Temple of Venus)."
  },
  {
    path: "Images/588a.jpeg",
    objectId: 588,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD."
  },
  {
    path: "Images/588b.jpeg",
    objectId: 588,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD."
  },
  {
    path: "Images/588c.JPG",
    objectId: 588,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD."
  },
  {
    path: "Images/588d.JPG",
    objectId: 588,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD."
  },
  {
    path: "Images/588e.jpeg",
    objectId: 588,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Oil lamp with a depiction of an erotic scene. Terracotta. 1st cent AD."
  },
  {
    path: "Images/589a.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589b.JPG",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589c.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589d.JPG",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589e.JPG",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589f.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589g.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589h.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589i.jpeg",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/589j.JPG",
    objectId: 589,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Two frescoes on opposite walls of a bedroom. 1st century CE. Carmiano, rural villa. \"Among the reception rooms of the rural villa, which specialised in wine production, one of the cubicula has a central painting with small doors depicting an erotic scene on the three walls with a black background. Paintings of this kind are found in the more secluded bedrooms of the houses. Bushes, silver drinking cups (kantharoi), candelabras, small columns and rearing [sic] horses embellish the architectural composition of the walls.\""
  },
  {
    path: "Images/590a.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590b.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590c.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590e.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590f.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590g.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590h.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590i.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/590j.JPG",
    objectId: 590,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Ephebe as a lampstand and tray-bearer. Bronze. from the House of Marcus Fabius Rufus (VII 16, 17-22). Parco Archelogico di Pompei, inv.13112 [cat. 16]"
  },
  {
    path: "Images/591a.JPG",
    objectId: 591,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Cameo glass panels with dionysiac scenes. Blue and white cameo glass. Reconstructed from fragments. Dionysus and Ariadne. (Ariadne drinking wine.)"
  },
  {
    path: "Images/591b.JPG",
    objectId: 591,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Cameo glass panels with dionysiac scenes. Blue and white cameo glass. Reconstructed from fragments. Dionysus and Ariadne. (Ariadne drinking wine.)"
  },
  {
    path: "Images/592.JPG",
    objectId: 592,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Cameo glass panels with dionysiac scenes. Blue and white cameo glass. Reconstructed from fragments. Dionysus and Ariadne. (Ariadne in despair, abandoned on Crete by Theseus.)"
  },
  {
    path: "Images/593a.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593b.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593c.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593d.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593e.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593f.JPG",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593g.JPG",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593h.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593i.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/593j.jpeg",
    objectId: 593,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Pan with the head of an animal. Marble. 1st cent CE. Pompeii, Praedia di Giulia Felice (II 4, 2)."
  },
  {
    path: "Images/594.jpeg",
    objectId: 594,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Mouth of a fountain with the bust of a satyr. Bronze with silver and copper damascening, 1st century AD, Pompeii, Suburban Baths."
  },
  {
    path: "Images/595a.jpeg",
    objectId: 595,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Young fisherman asleep. Marble. 1st cent AD. Pompeii, House of the Dancers (VI 2, 22)"
  },
  {
    path: "Images/595b.jpeg",
    objectId: 595,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Young fisherman asleep. Marble. 1st cent AD. Pompeii, House of the Dancers (VI 2, 22)"
  },
  {
    path: "Images/595c.jpeg",
    objectId: 595,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Young fisherman asleep. Marble. 1st cent AD. Pompeii, House of the Dancers (VI 2, 22)"
  },
  {
    path: "Images/595d.jpeg",
    objectId: 595,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Young fisherman asleep. Marble. 1st cent AD. Pompeii, House of the Dancers (VI 2, 22)"
  },
  {
    path: "Images/595e.jpeg",
    objectId: 595,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Young fisherman asleep. Marble. 1st cent AD. Pompeii, House of the Dancers (VI 2, 22)"
  },
  {
    path: "Images/596a.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596b.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596c.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596e.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596f.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596g.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596h.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/596i.JPG",
    objectId: 596,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Wall with lush garden of a large reception room (oecus). Fresco. 25-50AD. Pompeii, House of the Golden Bracelet (VI 17, 42)."
  },
  {
    path: "Images/597a.JPG",
    objectId: 597,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Sleeping Hermaphrodite. Marble. 1st century AD. Pompeii. House of Loreius Tiburtinus (II 2, 2)"
  },
  {
    path: "Images/597b.JPG",
    objectId: 597,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Sleeping Hermaphrodite. Marble. 1st century AD. Pompeii. House of Loreius Tiburtinus (II 2, 2)"
  },
  {
    path: "Images/597c.JPG",
    objectId: 597,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Sleeping Hermaphrodite. Marble. 1st century AD. Pompeii. House of Loreius Tiburtinus (II 2, 2)"
  },
  {
    path: "Images/597d.JPG",
    objectId: 597,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Sleeping Hermaphrodite. Marble. 1st century AD. Pompeii. House of Loreius Tiburtinus (II 2, 2)"
  },
  {
    path: "Images/598a.JPG",
    objectId: 598,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Statue from water channel of the garden in the House of Loreius Tiburtinus, Pompeii (II 2, 2). Marble and faience. 1st cent CE."
  },
  {
    path: "Images/598b.JPG",
    objectId: 598,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Statue from water channel of the garden in the House of Loreius Tiburtinus, Pompeii (II 2, 2). Marble and faience. 1st cent CE."
  },
  {
    path: "Images/598c.JPG",
    objectId: 598,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Statue from water channel of the garden in the House of Loreius Tiburtinus, Pompeii (II 2, 2). Marble and faience. 1st cent CE."
  },
  {
    path: "Images/598d.JPG",
    objectId: 598,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Statue from water channel of the garden in the House of Loreius Tiburtinus, Pompeii (II 2, 2). Marble and faience. 1st cent CE."
  },
  {
    path: "Images/599a.JPG",
    objectId: 599,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp"
  },
  {
    path: "Images/599b.JPG",
    objectId: 599,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp"
  },
  {
    path: "Images/599c.JPG",
    objectId: 599,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp"
  },
  {
    path: "Images/599d.JPG",
    objectId: 599,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp"
  },
  {
    path: "Images/599e.JPG",
    objectId: 599,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp"
  },
  {
    path: "Images/6.png",
    objectId: 6,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A man with receding hair and a beard, his large phallus upright against his right side and rising almost level with the top of his head. The figure is modelled in relief with a flat back and was probably made in a one piece mould; it has a low curving plinth, hollow underneath. White coating and painted red. Red-brown Nile silt with grey core. Abundant gold mica, organics, quartz and white inclusions. Feet, body and base missing."
  },
  {
    path: "Images/60.jpg",
    objectId: 60,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Marble figure of Priapus raising drapery with hands, back against support of larger figure(?); traces of red and black paint."
  },
  {
    path: "Images/600a.JPG",
    objectId: 600,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "ithyphallic bat lamp"
  },
  {
    path: "Images/600b.JPG",
    objectId: 600,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "ithyphallic bat lamp"
  },
  {
    path: "Images/600c.JPG",
    objectId: 600,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "ithyphallic bat lamp"
  },
  {
    path: "Images/600d.JPG",
    objectId: 600,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "ithyphallic bat lamp"
  },
  {
    path: "Images/600f.jpeg",
    objectId: 600,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "ithyphallic bat lamp"
  },
  {
    path: "Images/601a.JPG",
    objectId: 601,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "tree standing lamp"
  },
  {
    path: "Images/601b.JPG",
    objectId: 601,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "tree standing lamp"
  },
  {
    path: "Images/602a.jpeg",
    objectId: 602,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "small bat lamp"
  },
  {
    path: "Images/602b.jpeg",
    objectId: 602,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "small bat lamp"
  },
  {
    path: "Images/603a.JPG",
    objectId: 603,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "lamp with vulva and face"
  },
  {
    path: "Images/604a.JPG",
    objectId: 604,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "lararium lamps with seated woman and two small male figures (possibly priapus)"
  },
  {
    path: "Images/604b.JPG",
    objectId: 604,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "lararium lamps with seated woman and two small male figures (possibly priapus)"
  },
  {
    path: "Images/605a.JPG",
    objectId: 605,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp (very similar to 599 but not the same)"
  },
  {
    path: "Images/605b.jpeg",
    objectId: 605,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp (very similar to 599 but not the same)"
  },
  {
    path: "Images/605c.JPG",
    objectId: 605,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp (very similar to 599 but not the same)"
  },
  {
    path: "Images/605d.JPG",
    objectId: 605,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "satyr on twin-flamed bronze table lamp (very similar to 599 but not the same)"
  },
  {
    path: "Images/606a.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/606b.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/606c.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/606d.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/606e.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/606f.JPG",
    objectId: 606,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Small statue of Hermaphrodite. Rome, Viminal Hill, area of the municipal custom house S inv. 2163. Julio-Claudian age. Rome, Capitoline Museums, Antiquarium."
  },
  {
    path: "Images/607a.jpeg",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607b.jpeg",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607c.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607d.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607e.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607f.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607g.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607h.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607i.JPG",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607j.jpeg",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/607k.jpeg",
    objectId: 607,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with statuette of ithyphallic man and twin-flamed hanging lamp. PAP, inv. 1098"
  },
  {
    path: "Images/608a.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608b.JPG",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608c.JPG",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608d.JPG",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608e.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608f.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608g.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608h.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608i.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/608j.jpeg",
    objectId: 608,
    tags: [],
    objectType: "",
    lat: null,
    lng: null,
    description: "Tintinnabulum with zoomorphic phallus, tabula ansata and twin-flamed hanging lamp. Saw at New Light on Pompeii exhibition."
  },
  {
    path: "Images/62.jpg",
    objectId: 62,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Egyptian terracotta figure of bearded man wearing festival wreath headdress, possibly wearing a mask, or representing Priapos. Face looks like an actors mask. Head only. Mould-made and solid with crude back. Dark red-brown Nile silt fabric with grey core. Abundant fine gold mica, quartz, organics and white inclusions."
  },
  {
    path: "Images/63.jpg",
    objectId: 63,
    tags: [],
    objectType: "relief, votive offering",
    lat: null,
    lng: null,
    description: "Pentelic marble votive panel; central head of Herakles to left crowned with ivy-leaves and berries, herm of Pan on left and of Priapus on right."
  },
  {
    path: "Images/64.jpg",
    objectId: 64,
    tags: [],
    objectType: "figure",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Male terracotta figure exposing genitals, top of body missing. Priapus or actor standing astride and wrapped in a himation, the front of which is held up by his upright phallus, leaving his legs bare, the drapery at his back showing between them. Mould-made and hollow (rear broken away and lost). White coating and traces of pink paint. Brown Nile silt with abundant gold mica and quartz."
  },
  {
    path: "Images/65.jpg",
    objectId: 65,
    tags: [],
    objectType: "figure",
    lat: null,
    lng: null,
    description: "Terracotta figure of Priapus. A very small figure of a bald and bearded Priapus wearing a wreath, standing astride and wrapped in a himation, the front of which is held up by his upright phallus, leaving his legs bare, the drapery at his back showing between them. His right arm is bent up within his garment, the lowered left arm is exposed. The right leg below the knee and the left foot are lost; there is damage to the left side of the head. It is uncertain whether the upper back and the rear of the head have split away from the front or whether they were attached to some object: below them is part of a curved piercing or groove running from side to side. This Priapus may be part of a decorative handle of a vessel or lamp; it may be an applied foot of a vessel, one element of three or four such feet. Solid; probably from a one-piece mould. Micaceous orange-brown Nile silt, with traces of a matt red slip."
  },
  {
    path: "Images/66.png",
    objectId: 66,
    tags: [],
    objectType: "cup",
    lat: null,
    lng: null,
    description: "Ceramic cup with Venus, Priapus and Eros. 2nd century BCE. Princeton, University Art Museum."
  },
  {
    path: "Images/7.png",
    objectId: 7,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man, his head lost and his legs extending to his right, the left bent and close to the ground, the right with the knee raised (the right leg below the knee is missing, as is the left foot). He leans his left elbow and forearm on a pile of cushions, and his right hand holds his large phallus upright against his right side, but its end is broken off. His left hand is flaked away, but was held against his corpulent belly, perhaps holding an object. The figure is modelled in relief with an intended flat back and was probably made in a one-piece mould; it has a flat-faced plinth, hollowed out underneath, much of which is lost on the figure’s right side. Micaceous over-fired Nile silt with a grey and red core and a varied brown to beige surface; it contains white inclusions. The overfiring has caused the back to bulge outwards. There are minute traces of a white dressing."
  },
  {
    path: "Images/8.png",
    objectId: 8,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Phallic terracotta figurine of corpulent bearded male, possibly Priapus. One-piece mould made. Locally made. Traces of white coating and phallus is painted red. Red-brown Nile silt with grey core. Abundant gold mica, organics, quartz and white inclusions. Feet, legs and base missing."
  },
  {
    path: "Images/9.png",
    objectId: 9,
    tags: [],
    objectType: "figure, plaque",
    lat: 30.900508,
    lng: 30.5919275,
    description: "Terracotta reclining ithyphallic figure plaque, possibly Priapus. A reclining naked man with receding hair and a beard, his legs extending to his right, the left bent and close to the ground, the right with the knee raised. He leans his left elbow and forearm on a pile of cushions, and his right arm and hand hold his large phallus upright against his right side and rising almost level with the top of his head. His left hand holds a small unrecognized object (a looped garland or a small pot?) against his corpulent belly. The figure is modelled in relief with a flat back and was probably made in a one piece mould. Micaceous orange-brown Nile silt. Broken; missing legs and part of body."
  },
  {
    path: "Images/95.jpg",
    objectId: 95,
    tags: [],
    objectType: "statuette",
    lat: null,
    lng: null,
    description: "88 Statuette, fr., tuff. Pompeii, Antiquarium. Found in front of the workshop Pompeii I 20, 2. 3. - Elia, 0., CronPomp 1, 1975, 134-135 fig. II; Eschebach, H., Pompeii. Erlebte ant. Welt (1984) 313 fig. 74. - 1st century BC. - P. Stützftgur for gladiator holding his shield over his head. Sacrifice to Priapos"
  },
];
