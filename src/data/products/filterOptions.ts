export const fliterOptions = {
  sort: [
    { label: "請選擇價格排序", value: "default" },
    { label: "價格由高到低排序", value: "descendPrice" },
    { label: "價格由低到高排序", value: "ascendPrice" },
  ],

  category: [
    { label: "配件飾品", value: "accessories" },
    { label: "居家生活", value: "lifestyle" },
    { label: "風格文具", value: "stationery" },
    { label: "品味美食", value: "gourmet" },
  ],

  occasions: [
    { label: "生日", value: "birthday" },
    { label: "婚禮", value: "wedding" },
    { label: "商務伴手禮", value: "business" },
    { label: "情人節", value: "valentines" },
    { label: "聖誕節", value: "christmas" },
    { label: "畢業季", value: "graduation" },
  ],

  recipients: [
    { label: "男性情人", value: "male_lover" },
    { label: "女性情人", value: "female_lover" },
    { label: "男性友人", value: "male_friend" },
    { label: "女性友人", value: "female_friend" },
    { label: "父親", value: "father" },
    { label: "母親", value: "mother" },
    { label: "同事", value: "coworker" },
    { label: "師長", value: "teacher" },
  ],

  styles: [
    { label: "文青", value: "artsy" },
    { label: "可愛", value: "cute" },
    { label: "實用", value: "practical" },
    { label: "優雅", value: "elegant" },
    { label: "簡約", value: "simple" },
    { label: "療癒", value: "healing" },
  ],

  priceRange: [
    { label: "NT$500 以下", value: "under_500" },
    { label: "NT$500 - 1,000", value: "500_1000" },
    { label: "NT$1,000 - 3,000", value: "1000_3000" },
    { label: "NT$3,000 以上", value: "over_3000" },
  ],

  colors: [
    { label: "紅色", value: "red", hex: "#FF0000" },
    { label: "橘色", value: "orange", hex: "#FFA500" },
    { label: "黃色", value: "yellow", hex: "#FFD700" },
    { label: "綠色", value: "green", hex: "#008000" },
    { label: "藍色", value: "blue", hex: "#0000FF" },
    { label: "紫色", value: "purple", hex: "#800080" },
    { label: "粉色", value: "pink", hex: "#FFC0CB" },
    { label: "棕色", value: "brown", hex: "#8B4513" },
    { label: "黑色", value: "black", hex: "#000000" },
    { label: "白色", value: "white", hex: "#FFFFFF" },
    {
      label: "多色",
      value: "multicolor",
      hex: "linear-gradient(45deg, red, orange, yellow, green, blue, purple)",
    },
  ],
};
