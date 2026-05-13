import { useState, useEffect, useRef } from "react";

/* ─────────────────────────── design tokens ─────────────────────────── */
const tokens = {
  primary: "#214030",
  primaryContainer: "#1b3022",
  onPrimary: "#ffffff",
  secondary: "#36693e",
  secondaryFixed: "#b7f1ba",
  background: "#FCFAF8",
  surface: "#FCFAF8",
  onSurface: "#214030",
  onSurfaceVariant: "#4A5D52",
  outlineVariant: "#c3c8c1",
  outline: "#737973",
};

/* ─────────────────────────── data ─────────────────────────── */
const DESTINATIONS = [
  // {
  //   id: "munnar",
  //   name: "Munnar",
  //   panelSide: "right",
  //   panelTitle: "Don't Miss",
  //   panelItems: [
  //     "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
  //     "Walk through the historic Tata Tea Museum",
  //     "Experience the panoramic views from Anamudi Peak",
  //   ],
  //   body: [
  //     "Nestled in the lap of the Western Ghats, Munnar is a haven of peace and tranquility. The rolling hills are draped in an emerald green carpet of tea plantations, interspersed with winding lanes and misty mountain peaks. It was once the summer resort of the erstwhile British Government in South India, and its colonial charm still lingers in the architecture and well-manicured gardens.",
  //     "Breathe in the crisp, cool air scented with tea leaves and spices. Whether you are trekking through the verdant landscapes, photographing the mesmerizing waterfalls, or simply enjoying a warm cup of local brew while watching the clouds roll over the valleys, Munnar offers a deeply healing connection with nature. It is a sanctuary where the mind quiets and the spirit rejuvenates.",
  //   ],
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ddkhTkHwPIzuIPyYmyEXWSyhRsQ2hRf8WITlr4Xtb7_Hg6nhnLOA1ymkk-MW8P3-SsQPOM3skunn1yz0PHgLa5BxViOYiN1mlIRgQxcNA6TgtVVBmV-tdEcluRLmmoX33Ogn4VDIip1qrDdTzyuIJoawUn6ObTxu0n_co8rTxNDnhSQbVqtiq9oxwme9qpFA2W5jLwTZGYv_HuRJ0GEXyDp94V_XSdujiirE-jUsNeerUI51c-LH48QE7QLWNRYXoi8wpyFiNoI",
  //   imageAlt: "Misty rolling tea plantation hills in Munnar, Kerala",
  // },
  // {
  //   id: "alappuzha",
  //   name: "Alappuzha",
  //   panelSide: "left",
  //   panelTitle: "Key Experiences",
  //   panelItems: [
  //     "Overnight stay in a luxury traditional Kettuvallam",
  //     "Sunset strolls along the serene Marari Beach",
  //     "Bird watching at Pathiramanal Island",
  //   ],
  //   body: [
  //     "Often referred to as the 'Venice of the East', Alappuzha is famous for its intricate network of serene backwaters, tranquil canals, and expansive lagoons. A journey here is a step into a slower, more deliberate pace of life, where the rhythmic splash of oars and the distant call of tropical birds are the only sounds that interrupt the profound silence.",
  //     "Gliding through the emerald waters on a traditional wooden houseboat, you'll witness a unique aquatic ecosystem and rural Kerala village life unfolding along the banks. The gentle swaying of the boat, the lush palm-fringed shores, and the exquisite local cuisine served on board create a meditative and deeply restorative experience that epitomizes luxury wellness travel.",
  //   ],
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBtXWoRmJzWxzNq5420ULV5tCsYnOYMOrKMbY0LuxGUruvaVYtIbnfZRrhCFtXNw1NPc_Wp_aW8fYv34MQiZNOO7ed_HybyMpiRboYMOmhHcxdGdo4x47w26_JJzcZfpfyq82yD4V8ZQVf0Ybf4EqLY9uIPpxwn4LSZkHGF_Bjn1EbGlD3fN9jC_vYfRlmlKsBhJW7HVqII2FhM7JVXFjNkyCTqjGdQ9yYhmrPsgRaOOXNjc-VBKlOYqEDpRIdfOafD7lualPRSA",
  //   imageAlt: "Traditional Kerala houseboat on palm-fringed backwater canal",
  // },
  // {
  //   id: "wayanad",
  //   name: "Wayanad",
  //   panelSide: "right",
  //   panelTitle: "Highlights",
  //   panelItems: [
  //     "Explore the ancient Neolithic petroglyphs at Edakkal Caves",
  //     "Wildlife safaris at the Wayanad Wildlife Sanctuary",
  //     "Trek to the heart-shaped lake at Chembra Peak",
  //   ],
  //   body: [
  //     "Wayanad is a lush, mountainous district in northern Kerala, characterized by its untamed wilderness, rich tribal heritage, and sprawling spice plantations. Set high in the Western Ghats, it is a region where history, ancient culture, and raw nature seamlessly intertwine, offering a retreat far removed from the clamor of modern life.",
  //     "From trekking to cascading waterfalls hidden deep within the forest to exploring ancient caves adorned with prehistoric rock art, Wayanad invites you to discover its secrets at your own pace. The region's pristine environment, abundant biodiversity, and cool, misty climate make it an ideal sanctuary for those seeking both gentle adventure and peaceful, restorative isolation.",
  //   ],
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuACMV7iXn_gzouDHCPVT7jT0RtVrAcxKKRZi4OfBRTHlDpDkGRPUITVt1bWKOzyZbpEZXiQ9GooTE2woLGIMwFyX0_Dr2ExzwfA2cV2bTqd-3pFj15XuX6LXMw7n24DiGZKxTqnoA9gbHKa8RgWtxC8J_n5GxQzMIe5KlzBMV_3bPr11UsihxiGF24FGzQSZVO1FWK5rthMX8vvfpF7j5wyzJ6pXP6Fxn5m4igNEEXfnl5IbKW5QGG4ve9mo1JxPwU9gX11SW236JI",
  //   imageAlt: "Dense tropical forest with cascading waterfall in Wayanad",
  // },
   {
    id: "munnar",
    name: "Munnar",
    panelSide: "right",
    panelTitle: "Don't Miss",
    panelItems: [
      "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
      "Walk through the historic Tata Tea Museum",
      "Experience the panoramic views from Anamudi Peak",
    ],
    body: [
      "Nestled in the lap of the Western Ghats, Munnar is a haven of peace and tranquility. The rolling hills are draped in an emerald green carpet of tea plantations, interspersed with winding lanes and misty mountain peaks. It was once the summer resort of the erstwhile British Government in South India, and its colonial charm still lingers in the architecture and well-manicured gardens.",
      "Breathe in the crisp, cool air scented with tea leaves and spices. Whether you are trekking through the verdant landscapes, photographing the mesmerizing waterfalls, or simply enjoying a warm cup of local brew while watching the clouds roll over the valleys, Munnar offers a deeply healing connection with nature. It is a sanctuary where the mind quiets and the spirit rejuvenates.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ddkhTkHwPIzuIPyYmyEXWSyhRsQ2hRf8WITlr4Xtb7_Hg6nhnLOA1ymkk-MW8P3-SsQPOM3skunn1yz0PHgLa5BxViOYiN1mlIRgQxcNA6TgtVVBmV-tdEcluRLmmoX33Ogn4VDIip1qrDdTzyuIJoawUn6ObTxu0n_co8rTxNDnhSQbVqtiq9oxwme9qpFA2W5jLwTZGYv_HuRJ0GEXyDp94V_XSdujiirE-jUsNeerUI51c-LH48QE7QLWNRYXoi8wpyFiNoI",
    imageAlt: "Misty rolling tea plantation hills in Munnar, Kerala",
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    panelSide: "left",
    panelTitle: "Key Experiences",
    panelItems: [
      "Overnight stay in a luxury traditional Kettuvallam",
      "Sunset strolls along the serene Marari Beach",
      "Bird watching at Pathiramanal Island",
    ],
    body: [
      "Often referred to as the 'Venice of the East', Alappuzha is famous for its intricate network of serene backwaters, tranquil canals, and expansive lagoons. A journey here is a step into a slower, more deliberate pace of life, where the rhythmic splash of oars and the distant call of tropical birds are the only sounds that interrupt the profound silence.",
      "Gliding through the emerald waters on a traditional wooden houseboat, you'll witness a unique aquatic ecosystem and rural Kerala village life unfolding along the banks. The gentle swaying of the boat, the lush palm-fringed shores, and the exquisite local cuisine served on board create a meditative and deeply restorative experience that epitomizes luxury wellness travel.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBtXWoRmJzWxzNq5420ULV5tCsYnOYMOrKMbY0LuxGUruvaVYtIbnfZRrhCFtXNw1NPc_Wp_aW8fYv34MQiZNOO7ed_HybyMpiRboYMOmhHcxdGdo4x47w26_JJzcZfpfyq82yD4V8ZQVf0Ybf4EqLY9uIPpxwn4LSZkHGF_Bjn1EbGlD3fN9jC_vYfRlmlKsBhJW7HVqII2FhM7JVXFjNkyCTqjGdQ9yYhmrPsgRaOOXNjc-VBKlOYqEDpRIdfOafD7lualPRSA",
    imageAlt: "Traditional Kerala houseboat on palm-fringed backwater canal",
  },
  {
    id: "wayanad",
    name: "Wayanad",
    panelSide: "right",
    panelTitle: "Highlights",
    panelItems: [
      "Explore the ancient Neolithic petroglyphs at Edakkal Caves",
      "Wildlife safaris at the Wayanad Wildlife Sanctuary",
      "Trek to the heart-shaped lake at Chembra Peak",
    ],
    body: [
      "Wayanad is a lush, mountainous district in northern Kerala, characterized by its untamed wilderness, rich tribal heritage, and sprawling spice plantations. Set high in the Western Ghats, it is a region where history, ancient culture, and raw nature seamlessly intertwine, offering a retreat far removed from the clamor of modern life.",
      "From trekking to cascading waterfalls hidden deep within the forest to exploring ancient caves adorned with prehistoric rock art, Wayanad invites you to discover its secrets at your own pace. The region's pristine environment, abundant biodiversity, and cool, misty climate make it an ideal sanctuary for those seeking both gentle adventure and peaceful, restorative isolation.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACMV7iXn_gzouDHCPVT7jT0RtVrAcxKKRZi4OfBRTHlDpDkGRPUITVt1bWKOzyZbpEZXiQ9GooTE2woLGIMwFyX0_Dr2ExzwfA2cV2bTqd-3pFj15XuX6LXMw7n24DiGZKxTqnoA9gbHKa8RgWtxC8J_n5GxQzMIe5KlzBMV_3bPr11UsihxiGF24FGzQSZVO1FWK5rthMX8vvfpF7j5wyzJ6pXP6Fxn5m4igNEEXfnl5IbKW5QGG4ve9mo1JxPwU9gX11SW236JI",
    imageAlt: "Dense tropical forest with cascading waterfall in Wayanad",
  },
 
  // ── 11 remaining Kerala districts ──────────────────────────────────
 
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    panelSide: "left",
    panelTitle: "Must See",
    panelItems: [
      "Visit the magnificent Padmanabhaswamy Temple, one of India's wealthiest shrines",
      "Relax on the golden sands of Kovalam Beach",
      "Explore the colonial heritage of Napier Museum and Zoo",
    ],
    body: [
      "Thiruvananthapuram, the capital city of Kerala, is a vibrant blend of royal heritage, coastal beauty, and modern governance. Perched on seven hills and hugging the Arabian Sea coastline, the city carries the grace of its Travancore legacy in every palace corridor and temple gopuram. It is a city where spirituality and sophistication coexist effortlessly.",
      "Beyond its iconic landmarks, Thiruvananthapuram offers visitors a deeply enriching cultural experience — from classical Kathakali performances in heritage venues to the serene ayurvedic retreats along its coastline. The nearby Varkala cliffs and Poovar Island add layers of natural splendor that make the capital district a complete destination in itself.",
    ],
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=1200&q=80",
    imageAlt: "Padmanabhaswamy Temple and Thiruvananthapuram cityscape at dusk",
  },
  {
    id: "kollam",
    name: "Kollam",
    panelSide: "right",
    panelTitle: "Highlights",
    panelItems: [
      "Cruise through the vast Ashtamudi Lake on a scenic houseboat",
      "Discover the cashew capital's processing heritage and local markets",
      "Explore Thangassery Lighthouse and its colonial Portuguese fort ruins",
    ],
    body: [
      "Kollam, the gateway to the Kerala backwaters, is a city of profound natural charm and historic mercantile legacy. Once a thriving hub of the ancient spice trade, its shores were visited by Arab, Chinese, and European merchants for centuries. Today, the city retains its old-world character alongside the timeless beauty of Ashtamudi Lake, one of the largest estuaries in Kerala.",
      "The tranquil backwater routes from Kollam to Alappuzha are among the most celebrated water journeys in all of India. Alongside this, the lush cashew plantations, coir factories, and the warm hospitality of the local fishing communities offer a window into an authentic and unhurried Kerala way of life.",
    ],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    imageAlt: "Serene Ashtamudi Lake backwaters in Kollam at golden hour",
  },
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    panelSide: "left",
    panelTitle: "Key Experiences",
    panelItems: [
      "Embark on the sacred Sabarimala pilgrimage through forest trails",
      "Witness the spectacular Perunthenaruvi Waterfalls in full flow",
      "Explore the ancient Aranmula Parthasarathy Temple and Snake Boat Races",
    ],
    body: [
      "Known as the 'Pilgrim's Capital of Kerala', Pathanamthitta is a district of deep spiritual significance and breathtaking natural landscapes. The forested hills of the Western Ghats cradle ancient temples, and the rivers that flow through its valleys carry centuries of devotion. The world-famous Sabarimala Ayyappa Temple draws millions of pilgrims every season.",
      "Beyond its sacred sites, Pathanamthitta is a treasure chest of rivers, waterfalls, and spice gardens. The Pampa River meanders gracefully through its heartland, and the rubber and cardamom plantations that blanket its hills fill the air with a rich, earthy fragrance that is deeply calming and therapeutic.",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    imageAlt: "Lush forested hills and river valley of Pathanamthitta district",
  },
  {
    id: "kottayam",
    name: "Kottayam",
    panelSide: "right",
    panelTitle: "Don't Miss",
    panelItems: [
      "Visit the serene Vembanad Lake and Kumarakom Bird Sanctuary",
      "Explore the historic Valiapalli and Cheriapalli churches dating to 1579",
      "Walk through sprawling rubber and spice plantations",
    ],
    body: [
      "Kottayam is famously described as the land of 'letters, latex, and lakes' — a reflection of its extraordinary literary culture, thriving rubber industry, and the shimmering Vembanad Lake that defines its western boundary. It is a district of quiet intellectual pride and scenic abundance, where backwaters, hills, and valleys converge beautifully.",
      "The Kumarakom Bird Sanctuary is one of South India's finest birding destinations, drawing migratory species from across the globe. The historic Syrian Christian churches, some among the oldest in India, lend the district a unique cultural identity that sets it apart from anywhere else in Kerala.",
    ],
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=1200&q=80",
    imageAlt: "Kumarakom backwaters and lush greenery in Kottayam",
  },
  {
    id: "idukki",
    name: "Idukki",
    panelSide: "left",
    panelTitle: "Highlights",
    panelItems: [
      "Marvel at Asia's first arch dam at Idukki Reservoir",
      "Trek through Periyar Tiger Reserve's core wilderness",
      "Visit the sprawling cardamom and spice estates of Vandanmedu",
    ],
    body: [
      "Idukki is Kerala's largest district by area and one of its most ecologically significant. Blanketed by the dense forests of the Western Ghats, it is a land of dramatic gorges, towering peaks, mist-covered plateaus, and some of the finest spice-growing terrain on earth. Its biodiversity is among the richest in all of peninsular India.",
      "The Periyar Tiger Reserve at Thekkady is Idukki's crown jewel — a protected ecosystem where elephants, tigers, and rare birds roam freely through ancient shola forests. The district's cool climate, dramatic landscape, and abundance of Ayurvedic herbs make it an ideal destination for nature immersion and holistic healing.",
    ],
    image: "https://images.unsplash.com/photo-1571893544028-06b07af6dade?w=1200&q=80",
    imageAlt: "Misty mountain valleys and spice plantations of Idukki district",
  },
  {
    id: "ernakulam",
    name: "Ernakulam",
    panelSide: "right",
    panelTitle: "Key Experiences",
    panelItems: [
      "Explore the historic Fort Kochi with its iconic Chinese fishing nets",
      "Cruise the Lakshadweep Sea to Vypeen and Bolghatty Islands",
      "Discover world-class art galleries and the Kochi-Muziris Biennale",
    ],
    body: [
      "Ernakulam, home to the vibrant city of Kochi, is Kerala's commercial and cultural powerhouse. A city shaped by centuries of maritime trade with Arab, Chinese, Portuguese, Dutch, and British merchants, Kochi wears its cosmopolitan history with remarkable grace. The Fort Kochi peninsula is a living museum of colonial architecture, spice warehouses, and art-filled alleyways.",
      "Modern Kochi is also a city of the future — India's first fully solar-powered metro system, a thriving startup ecosystem, and the internationally acclaimed Kochi-Muziris Biennale cement its status as a global creative hub. Yet at its edges, the tranquil backwaters and coconut-fringed shores of Cherai Beach offer the timeless calm of traditional Kerala.",
    ],
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&q=80",
    imageAlt: "Iconic Chinese fishing nets at sunset in Fort Kochi, Ernakulam",
  },
  {
    id: "thrissur",
    name: "Thrissur",
    panelSide: "left",
    panelTitle: "Must Experience",
    panelItems: [
      "Witness the world-famous Thrissur Pooram elephant procession festival",
      "Visit the Vadakkunnathan Temple, a masterpiece of Kerala architecture",
      "Explore the Kerala Sangeetha Nataka Akademi and vibrant arts scene",
    ],
    body: [
      "Thrissur, the cultural capital of Kerala, pulses with an energy rooted in centuries of artistic tradition. It is the birthplace of many of Kerala's classical art forms and the host of Thrissur Pooram — widely regarded as the most spectacular temple festival on earth. The city's temples, museums, and performance spaces breathe life into a rich and living heritage.",
      "Beyond its festivals, Thrissur district encompasses the pristine Athirapally Waterfalls — often called the 'Niagara of India' — and the lush Sholayar forest ranges. The contrast between the city's cultural vibrancy and the district's natural grandeur makes Thrissur one of Kerala's most complete and rewarding destinations.",
    ],
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    imageAlt: "Caparisoned elephants in procession at the grand Thrissur Pooram festival",
  },
  {
    id: "palakkad",
    name: "Palakkad",
    panelSide: "right",
    panelTitle: "Highlights",
    panelItems: [
      "Walk through the historic Palakkad Fort built by Hyder Ali in 1766",
      "Trek the silent Nelliyampathy Hills through coffee and cardamom estates",
      "Explore the vast Silent Valley National Park, a UNESCO biosphere",
    ],
    body: [
      "Palakkad, the gateway between Kerala and Tamil Nadu, is a district of vast paddy fields, ancient fortifications, and cool hill stations. The famous Palakkad Gap in the Western Ghats gives the district a distinct climate and character — flatter, drier, and more open than much of Kerala, yet flanked by stunning forested ranges on all sides.",
      "The Silent Valley National Park, one of India's last pristine tropical rainforests, shelters an extraordinary diversity of flora and fauna including the endangered lion-tailed macaque. The Malampuzha Dam and Garden, the Hemambika temple at Kalpathy — a UNESCO intangible heritage site — and the warm, agrarian heartland culture make Palakkad a deeply rewarding district to explore.",
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "Rolling green paddy fields and Western Ghats mountains in Palakkad",
  },
  {
    id: "malappuram",
    name: "Malappuram",
    panelSide: "left",
    panelTitle: "Key Experiences",
    panelItems: [
      "Visit the sacred Thirunavaya Navamukunda Temple on the Bharathapuzha banks",
      "Explore the historic Kottakkunnu hilltop park and Malappuram Fort",
      "Discover the unique Mappila art, music, and culinary traditions",
    ],
    body: [
      "Malappuram is a district of layered cultural identity, where the ancient traditions of Kerala's Hindu heritage blend seamlessly with the rich Mappila Muslim culture that has flourished here for over a thousand years. The district's fertile plains, fed by the Bharathapuzha river, have nurtured one of the most distinctive regional cultures in South India.",
      "The region is also home to the famous Mamankam festival grounds at Thirunavaya, where one of Kerala's greatest historical festivals once took place every twelve years on the banks of the sacred river. Today, Malappuram's warmth, its aromatic cuisine, its unique arts, and its spiritual landscapes make it a destination that rewards the curious and unhurried traveller.",
    ],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    imageAlt: "Bharathapuzha river banks and lush countryside of Malappuram",
  },
  {
    id: "kozhikode",
    name: "Kozhikode",
    panelSide: "right",
    panelTitle: "Don't Miss",
    panelItems: [
      "Stroll through the ancient Kozhikode Spice Market and Halwa Bazaar",
      "Visit the historic Kappad Beach where Vasco da Gama first landed in 1498",
      "Explore the Beypore port, home of the legendary Uru wooden shipbuilding tradition",
    ],
    body: [
      "Kozhikode — ancient Calicut — is one of history's great port cities. It was here that Vasco da Gama arrived in 1498, opening the sea route between Europe and India and changing the course of world history. The city still carries the weight of that legacy in its spice-scented bazaars, ancient mosques, and centuries-old merchant havelis lining its streets.",
      "Beyond history, Kozhikode is celebrated for its exceptional cuisine — the Malabar biryani, the sweet Kozhikodan halwa, and the freshest seafood on the Kerala coast. The Calicut Beach with its evening promenade, the serene Thusharagiri Waterfalls, and the district's thriving literary culture make it one of Kerala's most intellectually and sensuously satisfying destinations.",
    ],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    imageAlt: "Ancient spice warehouses and historic harbour of Kozhikode at dusk",
  },
  {
    id: "kannur",
    name: "Kannur",
    panelSide: "left",
    panelTitle: "Highlights",
    panelItems: [
      "Witness the mesmerizing all-night Theyyam ritual performances",
      "Explore St. Angelo Fort overlooking the Arabian Sea coastline",
      "Visit the handloom weaving cooperatives for Kannur's famed brocade fabrics",
    ],
    body: [
      "Kannur is the land of Theyyam — one of the most extraordinary ritual art forms in the world, where performers embody deities in dramatic, fire-lit ceremonies that continue through the night. This deeply spiritual practice, alive for over a thousand years, draws visitors from across the globe who come to witness something genuinely unlike anything else on earth.",
      "Beyond its remarkable cultural heritage, Kannur is graced with some of Kerala's finest and least-crowded beaches — Muzhappilangad Drive-in Beach, the longest of its kind in Asia, and the serene shores of Dharmadom Island. The district's handloom weaving industry, its fragrant spice and coconut gardens, and its warm coastal communities complete a picture of authentic and unhurried Kerala life.",
    ],
    image: "https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?w=1200&q=80",
    imageAlt: "Dramatic Theyyam ritual performer with elaborate costume in Kannur",
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    panelSide: "right",
    panelTitle: "Key Experiences",
    panelItems: [
      "Explore the magnificent Bekal Fort, Kerala's largest fort on the Arabian Sea",
      "Visit the Ananthapura Lake Temple, the only lake temple in Kerala",
      "Discover the unique confluence of seven languages and cultures",
    ],
    body: [
      "Kasaragod, the northernmost district of Kerala, is a land of remarkable diversity — a place where seven languages are spoken, multiple cultural traditions coexist, and the Arabian Sea meets dense laterite hills in a landscape of quiet, unspoiled grandeur. It is often called 'Saptabhasha Bhoomi', the land of seven languages.",
      "The iconic Bekal Fort, rising dramatically from a headland into the sea, is one of the most photographed monuments in Kerala. The district's coconut-fringed beaches, its ancient temples and mosques, its cashew groves and paddy fields, and the pristine Ranipuram trekking trails through the Brahmagiri hills make Kasaragod an extraordinary final chapter in any journey through God's Own Country.",
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
    imageAlt: "Bekal Fort standing majestically on a headland above the Arabian Sea",
  },
];


const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASkpDzGVHkzMnxvP3BiyWklibBA9HH1aC2CmqHLFLw7PCEMBHpTbvBbpOnL9TxK3OWjwXX30PYx7gtxSGpPIlJmLyeyI1Yj4QpKU6bHjbmnut3LZEPqZXCQzbXz4Zejm2GD6b0bmds-6Yt6A8zVyxMLqIMqy7rzLtYeapEjCePGkP-e_T5gYAFGuMiF9Wc3xzPvF2tmNQs3n7r-laSV5wsAOW0g9YCT5PN1GGKvnkdegQ--U4GMeH7Xk1NQVYzKF_n8bZLqbNgHN0";

/* ─────────────────────────── helpers ─────────────────────────── */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="11" stroke={tokens.secondaryFixed} strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 5.5-6" stroke={tokens.secondaryFixed} strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlassPanel({ title, items, side }) {
  const pos = side === "left"
    ? { bottom: 0, left: 0, transform: "translate(1.5rem, -1.5rem)" }
    : { bottom: 0, right: 0, transform: "translate(-1.5rem, -1.5rem)" };
  return (
    <div style={{
      position: "absolute", ...pos,
      maxWidth: 320, borderRadius: "1.5rem",
      padding: "2rem",
      background: "rgba(33,64,48,0.42)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 8px 32px rgba(33,64,48,0.3)",
      color: "#fff",
    }}>
      <h4 style={{
        fontFamily: "'Playfair Display', serif", fontSize: "1.2rem",
        fontWeight: 600, color: tokens.secondaryFixed,
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        paddingBottom: "1rem",
        marginBottom: "1.25rem",
        margin: 0,
      }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
            <CheckIcon />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.88)" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function DestinationSection({ dest }) {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{
      padding: "6rem 0",
      background: tokens.background,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)" }}>
        {/* Image card */}
        <div style={{
          position: "relative",
          height: "clamp(300px, 60vh, 640px)",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(33,64,48,0.15)",
          marginBottom: "4rem",
        }}>
          <img src={dest.image} alt={dest.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy" />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(33,64,48,0.2) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          <GlassPanel title={dest.panelTitle} items={dest.panelItems} side={dest.panelSide} />
        </div>

        {/* Text */}
        <div style={{ maxWidth: 896 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1,
            color: tokens.primary, marginBottom: "2rem",
          }}>{dest.name}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {dest.body.map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 18,
                lineHeight: 1.65, color: tokens.onSurfaceVariant, margin: 0,
              }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────── ROOT ─────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder { color: #737973; }
      `}</style>


      <div style={{ fontFamily: "'Inter', sans-serif", background: tokens.background, color: tokens.onSurface }}>

        {/* ── HERO ── */}
        <section style={{
          position: "relative", height: "70vh", minHeight: 600,
          display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 96, overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <img src={HERO_IMAGE} alt="Serene Kerala backwaters at sunrise"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(33,64,48,0.40)", mixBlendMode: "multiply" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${tokens.background} 0%, transparent 35%)` }} />
          </div>

          <div style={{
            position: "relative", zIndex: 10,
            maxWidth: 1280, margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
            textAlign: "center", color: "#fff",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 7vw, 64px)",
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem", marginTop: 0,
              textShadow: "0 2px 20px rgba(33,64,48,0.5)",
            }}>Explore God's Own Country</h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 2.2vw, 22px)",
              fontWeight: 400, lineHeight: 1.6,
              maxWidth: 680, margin: "0 auto",
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 1px 8px rgba(33,64,48,0.4)",
            }}>
              Discover the soul of India through tranquil backwaters, lush tea
              gardens, and pristine beaches. A curated guide to your healing journey.
            </p>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        {DESTINATIONS.map((dest) => (
          <DestinationSection key={dest.id} dest={dest} />
        ))}

      </div>
    </>
  );
}

