// Reddit Application information (https://www.reddit.com/prefs/apps/)
export const redditApp = {
	clientId: "ftsPs2iwqWeb2A",
	userAgent: "SoulsFlairBot"
}


// Trophy list
// ID: the ID for the element
// Name: the label under the icon
// Icon: path to an image to display
// oldCode: The flair code to represent this game on the subreddit.  Applies to old Reddit (eg. "DeBbSek").
// newCode: The same, but for new reddit's emojis.  Automatically adds surrounding colons (eg. ":DeS::Bb::Sek:").
export const trophies = [
	{id: "demonssouls", name: "Demon's Souls", icon: "img/trophies/platinum.png", oldCode: "De", newCode: "DeS"},
	{id: "darksouls1", name: "Dark Souls", icon: "img/trophies/bronze.png", oldCode: "Da", newCode: "DaS"},
	{id: "darksouls2", name: "Dark Souls II", icon: "img/trophies/gold.png", oldCode: "Da2", newCode: "DaS2"},
	{id: "bloodborne", name: "Bloodborne", icon: "img/trophies/green.png", oldCode: "Bb", newCode: "Bb"},
	{id: "darksouls3", name: "Dark Souls III", icon: "img/trophies/purple.png", oldCode: "Da3", newCode: "DaS3"},
	{id: "sekiro", name: "Sekiro", icon: "img/trophies/magenta.png", oldCode: "Sek", newCode: "Sek"}
	// {id: "eldenring", name: "Elden Ring", icon: "img/trophies/charcoal.png", oldCode: "Eld", newCode: "Eld"}
	// {id: "zzt", name: "ZZT", icon: "img/trophies/ash.png", oldCode: "ZZT", newCode: "Zzt"}
]