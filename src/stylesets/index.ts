export const text_preset_1 =
  ["text-5xl", "tracking-normal", "leading-[110%]", "font-medium"];

export const text_preset_1_mobile =
  ["text-3xl", "tracking-normal", "leading-[135%]", "font-medium"];

export const text_preset_2 =
  ["text-[32px]", "-tracking-[0.1px]", "leading-[125%]", "font-medium"];

export const text_preset_2_mobile_medium =
  ["text-[15px]", "tracking-normal", "leading-loose", "font-medium"];

export const text_preset_2_mobile_regular =
  ["text-[15px]", "tracking-normal", "leading-[165%]", "font-normal"];

export const text_preset_2_mobile_light =
  ["text-[15px]", "tracking-normal", "leading-loose", "font-light"];

export const text_preset_3 =
  ["text-xl", "tracking-[0.25px]", "leading-[120%]", "font-medium"];

export const text_preset_3_mobile =
  ["text-xs", "tracking-[5px]", "leading-[300%]", "font-medium"];

export const text_preset_4 =
  ["text-lg", "tracking-normal", "leading-[155%]", "font-normal"];

export const text_preset_4_mobile =
  ["text-[10px]", "tracking-[0.25px]", "leading-[120%]", "font-medium", "italic"];

export const text_preset_5 =
  ["text-[1rem]", "tracking-[0.5px]", "leading-[110%]", "font-normal"];

export const text_preset_5_light =
  ["text-[1rem]", "tracking-[0.5px]", "leading-[225%]", "font-light"];

export const text_preset_6 = ["text-sm", "tracking-[0.25px]", "leading-loose", "font-normal"];

export const text_preset_6_medium = ["text-sm", "tracking-[0.25px]", "leading-loose", "font-medium"];

export const text_preset_6_semibold =
  ["text-sm", "tracking-[5px]", "leading-[300%]", "font-semibold"];

export const text_preset_7 =
  ["text-[10px]", "tracking-[0.25px]", "leading-[120%]", "font-medium", "italic"];


const modifiers = ["tablet", "desktop", "hover", "focus", "active", "placeholder"] as const;
const classesSet = new Set<string>([
  ...text_preset_1,
  ...text_preset_1_mobile,
  ...text_preset_2,
  ...text_preset_2_mobile_medium,
  ...text_preset_2_mobile_regular,
  ...text_preset_2_mobile_light,
  ...text_preset_3,
  ...text_preset_3_mobile,
  ...text_preset_4,
  ...text_preset_4_mobile,
  ...text_preset_5,
  ...text_preset_5_light,
  ...text_preset_6,
  ...text_preset_6_medium,
  ...text_preset_6_semibold,
  ...text_preset_7,
]);
export const safelist = modifiers.map(modifier => [...classesSet].map(it => `${modifier}:${it}`)).flat();
export function with_modifier(modifier: typeof modifiers[number], preset: string[]) {
  return preset
    .map((it) => `${modifier}:${it}`)
    .join(" ");
}


