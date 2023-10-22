class clotheSuggestion  {
    
    constructor(season, mid_temp, tips,  image){
        
        this.season = season;
        this.mid_temp = mid_temp;
        this.tips = tips;
        this.image = image;
    }

}

const spring01 = new clotheSuggestion(
    "spring",
    10,
    "- Layering is key for fluctuating spring temperatures. <br><br> - Start with a lightweight, breathable base layer like a long-sleeve shirt or a thermal top. <br><br> - Wear a versatile outerwear piece like a light jacket or a windbreaker. Look for something that's water-resistant in case of spring showers. <br><br> - Choose pants or jeans that are comfortable and not too heavy. <br><br> - You can also consider wearing leggings or thermal tights underneath for added warmth. <br><br> - Go for closed-toe shoes or ankle boots to keep your feet warm and dry.<br><br> - Don't forget a scarf, hat, and gloves. These accessories can make a big difference in keeping you warm.",
    "spring01.png"
    );

const summer01 = new clotheSuggestion(
   "summer",
   16,
   "- In a commfortable early summer day, you can start with a light hoodie or jacket. <br><br> - Opt for shorts or a skirt in a comfortable material like cotton or linen. This is a great time to show some leg and stay cool. <br><br> - Open-toe sandals or low-top sneakers are ideal for early summer. Make sure your shoes are comfortable for walking. <br><br> - Wear a wide-brimmed hat to protect your face from the sun. <br><br> - Don't forget to apply sunscreen to exposed skin.<br><br> - Embrace summery colors like pastels, brights, and floral patterns in your clothing choices.",
   "autumn01.png"
);

const summer02 = new clotheSuggestion(
    "summer",
    23,
    "- Opt for clothing made from lightweight and breathable fabrics like cotton, linen, and chambray. <br><br> - Choose lightweight and breathable undergarments to stay comfortable in the heat. These materials allow air to flow and help keep you cool.<br><br> - Wear a wide-brimmed sun hat to protect your face and head from the sun's rays. This also adds a stylish touch to your outfit. <br><br> - Open-toe sandals or flip-flops are suitable for warm summer days. They keep your feet cool and comfortable.",
    "summer02.png"
 );

 const summer03 = new clotheSuggestion(
    "summer",
    30,
    "- Sleeveless tops, tank tops, and short-sleeve T-shirts are perfect choices for hot weather. <br><br> - Consider wearing shorts or a sundress. Both options are excellent for keeping cool in the heat. <br><br> - Choose loose-fitting styles to allow for better air circulation. <br><br> - Light-colored clothing reflects sunlight and helps keep you cooler than dark colors. Whites, pastels, and light shades are excellent choices.  <br><br> - Sunglasses are essential for protecting your eyes from the sun. Choose ones with UV protection.",
    "summer01.png"
 );

 const rainyDay = new clotheSuggestion(
    "rainy",
    20,
    "- Start with a waterproof or water-resistant jacket or coat to keep rain off your clothing. Look for one with a hood to keep your head dry. Consider options with breathable fabrics like Gore-Tex to prevent overheating. <br><br> - Wear a comfortable, moisture-wicking base layer to keep you dry. This can be a long-sleeve shirt made of materials like merino wool or synthetic fabrics. <br><br> - Add a mid-layer, like a sweater or fleece, for warmth. Wear waterproof boots or shoes. <br><br> - Carry a compact and sturdy umbrella to shield yourself from rain. Make sure it's easy to store in your bag.",
    "rainday.png"
 );

 const autumn01 = new clotheSuggestion(
    "autumn",
    15,
    "- Layering is key for fluctuating autumn temperatures. Start with a lightweight, breathable base layer like a long-sleeve shirt or a thermal top. <br><br> - Wear a versatile outerwear piece like a light jacket or a windbreaker. Look for something that's water-resistant in case of spring showers. <br><br> - Choose pants or jeans that are comfortable and not too heavy. <br><br> - You can also consider wearing leggings or thermal tights underneath for added warmth. <br><br> - Go for closed-toe shoes or ankle boots to keep your feet warm and dry.<br><br> - Don't forget a scarf, hat, and gloves. These accessories can make a big difference in keeping you warm.",
    "autumn02.png"
    );

    const rainyAutumn = new clotheSuggestion(
        "autumn",
        12,
        "- Start with a waterproof or water-resistant jacket or coat to keep rain off your clothing. Look for one with a hood to keep your head dry. Consider options with breathable fabrics like Gore-Tex to prevent overheating.<br><br> - Wear a comfortable, moisture-wicking base layer to keep you dry. This can be a long-sleeve shirt made of materials like merino wool or synthetic fabrics. <br><br> - Add a mid-layer, like a sweater or fleece, for warmth. <br><br> - Wear waterproof boots or shoes. <br><br> - Carry a compact and sturdy umbrella to shield yourself from rain. Make sure it's easy to store in your bag.",
        "rainy_autumn.png"
        );
    const autumn03 = new clotheSuggestion(
        "autumn",
        7,
        "- Layering is key in colder temperatures. Wear a long-sleeve shirt or sweater as a base layer to provide warmth. <br><br> - Add a mid-layer, such as a fleece or heavier sweater, for extra insulation. <br><br> - You can also consider a lightweight down jacket or vest. A warm, insulated coat or jacket that provides good protection against the cold. Look for options that are windproof. <br><br> - A scarf is a versatile accessory that provides extra warmth.Wear a hat to keep your head warm. A beanie or a knitted cap is a good choice. <br><br> - Opt for insulated and waterproof boots or shoes. Ensure they have good traction to prevent slipping on wet surfaces.",
        "autumn03.png"
        );

    const winter01 = new clotheSuggestion(
         "winter",
        0,
        "- Invest in a high-quality, insulated winter coat that provides excellent warmth and protection against the cold wind. Look for options with features like down or synthetic insulation, a hood with fur or faux-fur lining, and a waterproof or water-resistant shell. <br><br> - Opt for winter-appropriate pants, such as insulated snow pants or lined jeans. You can also wear thermal leggings or long johns underneath for added warmth.<br><br> - A cozy, heavy sweater or a knit pullover can provide additional warmth. <br><br> - Wrap a thick scarf around your neck to keep it warm and protect against wind.",
        "winter01.png"
        );
const winter02 = new clotheSuggestion(
       "winter",
      -10,
      "- Layering is crucial for staying warm. Start with thermal or moisture-wicking base layers to trap body heat and keep sweat away from your skin. <br><br> - Add an insulating mid-layer, such as a fleece jacket or a down vest, for extra warmth. This layer should provide insulation without being too bulky. <br><br>- Over your layers, wear a warm and insulated winter jacket designed to withstand freezing temperatures. <br><br> - If it's snowing or you'll be walking in deep snow, consider wearing snow gaiters to keep snow out of your boots. <br><br> - Don't forget extras like earmuffs or ear warmers, as well as a face mask or balaclava to protect against cold winds.",
      "winter02.png"
      );

      

      module.exports = {
       
        spring01,
        summer01,
        summer02,
        summer03 ,
        rainyDay,
        autumn01,
        rainyAutumn,
        autumn03,
        winter01,
        winter02
      };