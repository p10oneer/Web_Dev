export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgURL: string;
  productURLkaspi: string;
  productRating: number;
}

export const products = [
  {
    id: 1,
    name: 'ASUS ROG Zephyrus Duo 16',
    price: 2399990,
    description: "диагональ экрана: 16 дюйм, процессор: AMD Ryzen 9 6900HX, видеокарта: NVIDIA GeForce RTX 3080 Ti, размер оперативной памяти: 64 ГБ, тип жесткого диска: SSD, общий объем накопителей: 4000 ГБ",
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h06/67512319311902/asus-rog-zephyrus-duo-16-gx650rx-lo218x-90nr0921-m00ej0-108303725-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-duo-16-gx650rx-lo218x-90nr0921-m00ej0-chernyi-108303725/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 2,
    name: 'Razer Blade 17 RZ09-0423',
    price: 2239900,
    description: 'диагональ экрана: 17.3 дюйм, видеокарта: GeForce RTX 3070 Ti, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1000 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h2c/66699043831838/razer-blade-17-rz09-0423-mid-2022-rz09-0423qef3-r3e1-chernyi-107970477-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/razer-blade-17-rz09-0423-mid-2022-rz09-0423qef3-r3e1-chernyi-107970477/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 3,
    name: 'ASUS ROG Strix G533ZS-LN050X',
    price: 1849990,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Core i9 12900H, видеокарта: NVIDIA GeForce RTX 3080, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1024 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/h95/65501275521054/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087/?c=750000000#!/item',
    productRating: 4.8
  },
  {
    id: 4,
    name: 'MSI Vector GP66HX',
    price: 1635703,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Core i9-12900HX, видеокарта: NVIDIA GeForce RTX 3070 Ti, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1024 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h7a/66794307321886/msi-vector-gp66hx-12ugs-212kz-temno-seryi-108002384-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/msi-vector-gp66hx-12ugs-212kz-temno-seryi-108002384/?c=750000000#!/item',
    productRating: 4.8
  },
  {
    id: 5,
    name: 'Razer Blade 17 RZ09-0423EED3-R3E1',
    price: 1630800,
    description: 'диагональ экрана: 17.3 дюйм, процессор: Intel Core i7 12800H, видеокарта: NVIDIA GeForce RTX 3060, размер оперативной памяти: 16 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1024 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h13/66664694874142/razer-blade-17-rz09-0423eed3-r3e1-chernyi-107960960-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/razer-blade-17-rz09-0423eed3-r3e1-chernyi-107960960/?c=750000000#!/item',
    productRating: 4.5
  },
  {
    id: 6,
    name: 'Lenovo Legion 7 15IMH05',
    price: 1499990 ,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Core i7 10750H, видеокарта: NVIDIA GeForce RTX 2080 Max-Q, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1000 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h61/33072938156062/lenovo-legion-7-15imh05-81yt001aru-seryj-100923067-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/lenovo-legion-7-15imh05-81yt001aru-seryi-100923067/?c=750000000#!/item',
    productRating: 4.4
  },
  {
    id: 7,
    name: 'Lenovo Legion 7 16ACHg6',
    price: 1441527,
    description: 'диагональ экрана: 16 дюйм, процессор: AMD Ryzen 9 5900HX, видеокарта: NVIDIA GeForce RTX 3080, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1024 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h25/62939390869534/lenovo-legion-7-16achg6-82n6000brk-temno-seryj-106712248-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/lenovo-legion-7-16achg6-82n6000brk-temno-seryi-106712248/?c=750000000#!/item',
    productRating: 4.1
  },
  {
    id: 8,
    name: 'GIGABYTE AERO 16 XE5 XE5-73RU944JP',
    price: 1340952,
    description: 'диагональ экрана: 16 дюйм, процессор: Intel Core i7-12700H, видеокарта: NVIDIA GeForce RTX 3070 Ti, размер оперативной памяти: 32 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1024 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h21/67278062911518/gigabyte-aero-16-xe5-xe5-73ru944jp-serebristyi-108213432-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/gigabyte-aero-16-xe5-xe5-73ru944jp-serebristyi-108213432/?c=750000000#!/item',
    productRating: 3.9
  },
  {
    id: 9,
    name: 'ASUS ROG Strix G15 G513RS-HQ040W',
    price: 1229970,
    description: 'диагональ экрана: 15.6 дюйм, процессор: AMD Ryzen 7 6800H, видеокарта: NVIDIA GeForce RTX 3080, размер оперативной памяти: 16 ГБ, тип жесткого диска: SSD, общий объем накопителей: 1000 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h55/67048082472990/asus-rog-strix-g15-g513rs-hq040w-90nr0b55-m001x0-seryi-108114533-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-g513rs-hq040w-90nr0b55-m001x0-seryi-108114533/?c=750000000#!/item',
    productRating: 3.8
  },
  {
    id: 10,
    name: 'Acer Predator Helios 300 PH317-55',
    price: 1099990,
    description: 'диагональ экрана: 17.3 дюйм, процессор: Intel Core i9 11900H, видеокарта: NVIDIA GeForce RTX 3070, размер оперативной памяти: 16 ГБ, тип жесткого диска: SSD, общий объем накопителей: 512 ГБ',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h11/63616290750494/acer-predator-helios-300-ph317-55-nh-qb7cn-003-cernyj-107071915-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/acer-predator-helios-300-ph317-55-nh-qb7cn-003-chernyi-107071915/?c=750000000#!/item',
    productRating: 3.5
  }
];

