export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "the-highest-summits",
    title: "THE HIGHEST SUMMITS",
    subtitle: "POSTER DESIGN",
    category: "Illustration",
    thumbnail: "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/908c19a4-43a2-4278-88ee-830922d97c06_rwc_0x0x6024x4518x6024.png?h=c0c05cd8eb2f02d779b7f5f878dbfeaa",
    images: [
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/00379515-2e80-418c-87a9-ac3fa75d8df9_rw_3840.png?h=3135fa984fff2badf391192015abd6bc",
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/1254e64d-5a12-4b5e-999e-6aac9aa3c41c_rw_3840.png?h=838f7baf6fa4d204e044a5c2d436ec8f"
    ],
    description: "Illustrated poster of the highest peak in the world, Mount Everest. Everest sits at the border between Nepal and Tibet, China in the mountain range the Himalayas. Each country has a unique name for the mountain. The Nepali name is Sagarmatha which means \"Goddess of the Sky\", and the Tibet name is Chomolungma which means \"Goddess Mother Of the World\"."
  },
  {
    id: "happi-prebiotic-soda",
    title: "HÄPPI",
    subtitle: "DESIGN / MARKETING",
    category: "Branding",
    thumbnail: "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/21dd2ebd-523f-472d-a35c-46069c9ffb04_rwc_1520x2388x1020x765x1020.png?h=2eb5d0490020e0f618093c772a26db56",
    images: [
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/21dd2ebd-523f-472d-a35c-46069c9ffb04_rwc_1520x2388x1020x765x1020.png?h=2eb5d0490020e0f618093c772a26db56"
    ],
    description: "Brand identity and marketing materials for Häppi, a prebiotic soda company. The design focuses on vibrant colors and playful typography to appeal to health-conscious consumers."
  },
  {
    id: "2you",
    title: "2you",
    subtitle: "BRANDING",
    category: "Branding",
    thumbnail: "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/e9640137-5330-4202-85a8-ad9b1eb44b35_carw_4x3x32.png?h=ac0b4c377b920806b8f9925b0970ffd6",
    images: [
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/e9640137-5330-4202-85a8-ad9b1eb44b35_carw_4x3x32.png?h=ac0b4c377b920806b8f9925b0970ffd6"
    ],
    description: "Complete brand identity for 2you, including logo design, color palette, typography, and brand guidelines."
  },
  {
    id: "gains",
    title: "GAINS PROTEIN BAR",
    subtitle: "MOTION GRAPHICS / DESIGN",
    category: "Motion Graphics",
    thumbnail: "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/b821e17d-2cc8-45af-b6e5-ebe06e7184f1_rwc_127x207x1036x777x32.png?h=513f1681e2447e2d8628213ef4da4b69",
    images: [
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/b821e17d-2cc8-45af-b6e5-ebe06e7184f1_rwc_127x207x1036x777x32.png?h=513f1681e2447e2d8628213ef4da4b69"
    ],
    description: "Motion graphics and packaging design for Gains Protein Bar. The project includes animated advertisements and product visualizations."
  },
  {
    id: "ene-postery",
    title: "ENE POSTERY",
    subtitle: "WEB DEVELOPMENT",
    category: "Web Development",
    thumbnail: "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/54d2070c-3c62-48f3-bb37-59d80fa33080_carw_4x3x32.jpg?h=ac8c0c8f32de441d653e96174c16d0b3",
    images: [
      "https://cdn.myportfolio.com/8f5289fb-22ca-4a39-9cb4-f088491a5deb/54d2070c-3c62-48f3-bb37-59d80fa33080_carw_4x3x32.jpg?h=ac8c0c8f32de441d653e96174c16d0b3"
    ],
    description: "Full-stack web development for Ene Postery, an online poster store. Built with modern technologies including React and Node.js."
  }
];
