export const products = [
  // Обычные комплекты белья
  {
    id: 1,
    name: "Комплект 'Жемчужно-белый'",
    category: "Белье",
    photo: "complect1",
    complect: [6, 11, 16],
    color: "Белый",
    price: 25000,
    special: "none",
    about:
      "Элегантный комплект из сатина, который включает пододеяльник, наволочку и простыню, идеально подходит для создания уюта в спальне и подчеркивает ваш вкус.",
    material: "Сатин",
  },
  {
    id: 2,
    name: "Комплект 'Графитно-серый'",
    category: "Белье",
    photo: "complect2",
    complect: [7, 12, 17],
    color: "Серый",
    price: 26000,
    special: "none",
    about:
      "Стильный комплект из сатина, в который входят пододеяльник, наволочка и простыня, добавит нотку современности в ваш интерьер и создаст атмосферу расслабления.",
    material: "Сатин",
  },
  {
    id: 3,
    name: "Комплект 'Пудрово-бежевый'",
    category: "Белье",
    photo: "complect3",
    complect: [8, 13, 18],
    color: "Бежевый",
    price: 24000,
    special: "none",
    about:
      "Нежный пудровый комплект из сатина, который включает пододеяльник, наволочку и простыню, создаст атмосферу спокойствия и уюта в вашей спальне.",
    material: "Сатин",
  },
  {
    id: 4,
    name: "Комплект 'Васильково-синий'",
    category: "Белье",
    photo: "complect4",
    complect: [9, 14, 19],
    color: "Синий",
    price: 26000,
    special: "none",
    about:
      "Яркий комплект из сатина, в который входят пододеяльник, наволочка и простыня, придаст вашему интерьеру свежесть и элегантность, а также подчеркнет вашу индивидуальность.",
    material: "Сатин",
  },
  {
    id: 5,
    name: "Комплект 'Вишнево-Ягодный'",
    category: "Белье",
    photo: "complect5",
    complect: [10, 15, 20],
    color: "Красный",
    price: 37000,
    special: "none",
    about:
      "Калейдоскоп ягодных оттенков в комплекте из сатина, включающем пододеяльник, наволочку и простыню, который преобразит вашу спальню и создаст атмосферу уюта и тепла.",
    material: "Сатин",
  },
  // Наволочки
  {
    id: 6,
    name: "Наволочка 'Жемчужно-белый'",
    category: "Наволочка",
    photo: "bedding11",
    complect: [],
    color: "Белый",
    price: 7000,
    special: "none",
    about:
      "Наволочка из сатина, дарящая вам комфорт и стиль, станет идеальным дополнением к вашему комплекту белья.",
    material: "Сатин",
  },
  {
    id: 7,
    name: "Наволочка 'Графитно-серый'",
    category: "Наволочка",
    photo: "bedding12",
    complect: [],
    color: "Серый",
    price: 6000,
    special: "none",
    about:
      "Современная наволочка из сатина, которая станет идеальным дополнением к вашему комплекту и подчеркнет его стиль.",
    material: "Сатин",
  },
  {
    id: 8,
    name: "Наволочка 'Пудрово-бежевый'",
    category: "Наволочка",
    photo: "bedding13",
    complect: [],
    color: "Бежевый",
    price: 5000,
    special: "none",
    about:
      "Нежная наволочка из сатина, которая прекрасно впишется в любой интерьер и добавит мягкости вашему пространству.",
    material: "Сатин",
  },
  {
    id: 9,
    name: "Наволочка 'Васильково-синий'",
    category: "Наволочка",
    photo: "bedding14",
    complect: [],
    color: "Синий",
    price: 6000,
    special: "none",
    about:
      "Наволочка яркого цвета из сатина для тех, кто ценит стиль и комфорт, станет акцентом в вашем интерьере.",
    material: "Сатин",
  },
  {
    id: 10,
    name: "Наволочка 'Вишнево-Ягодный'",
    category: "Наволочка",
    photo: "bedding15",
    complect: [],
    color: "Красный",
    price: 10000,
    special: "none",
    about:
      "Яркая наволочка из сатина, которая добавит вашему пространству игривости и привнесет атмосферу радости.",
    material: "Сатин",
  },
  // Пододеяльники
  {
    id: 11,
    name: "Пододеяльник 'Жемчужно-белый'",
    category: "Пододеяльник",
    photo: "bedding21",
    complect: [],
    color: "Белый",
    price: 8000,
    special: "none",
    about:
      "Пододеяльник из сатина, обеспечивающий непревзойденный комфорт и добавляющий стиль вашему спальному комплекту.",
    material: "Сатин",
  },
  {
    id: 12,
    name: "Пододеяльник 'Графитно-серый'",
    category: "Пододеяльник",
    photo: "bedding22",
    complect: [],
    color: "Серый",
    price: 9000,
    special: "none",
    about:
      "Элегантный пододеяльник из сатина, который придаст вашему интерьеру современный вид и уют.",
    material: "Сатин",
  },
  {
    id: 13,
    name: "Пододеяльник 'Пудрово-бежевый'",
    category: "Пододеяльник",
    photo: "bedding23",
    complect: [],
    color: "Бежевый",
    price: 8000,
    special: "none",
    about:
      "Нежный пододеяльник из сатина, создающий атмосферу спокойствия и уюта, станет идеальным выбором для вашего интерьера.",
    material: "Сатин",
  },
  {
    id: 14,
    name: "Пододеяльник 'Васильково-синий'",
    category: "Пододеяльник",
    photo: "bedding24",
    complect: [],
    color: "Синий",
    price: 7000,
    special: "none",
    about:
      "Яркий пододеяльник из сатина, который освежит вашу спальню и создаст стильный акцент.",
    material: "Сатин",
  },
  {
    id: 15,
    name: "Пододеяльник 'Вишнево-Ягодный'",
    category: "Пододеяльник",
    photo: "bedding25",
    complect: [],
    color: "Красный",
    price: 12000,
    special: "none",
    about:
      "Яркий и стильный пододеяльник из сатина для истинных ценителей красоты, который преобразит вашу спальню.",
    material: "Сатин",
  },
  // Простыни
  {
    id: 16,
    name: "Простыня 'Жемчужно-белый'",
    category: "Простыня",
    photo: "bedding31",
    complect: [],
    color: "Белый",
    price: 10000,
    special: "none",
    about:
      "Простыня из сатина, создающая атмосферу легкости и комфорта, прекрасно дополнит ваш спальный комплект.",
    material: "Сатин",
  },
  {
    id: 17,
    name: "Простыня 'Графитно-серый'",
    category: "Простыня",
    photo: "bedding32",
    complect: [],
    color: "Серый",
    price: 11000,
    special: "none",
    about:
      "Стильная простыня из сатина, которая дополнит ваш комплект белья и создаст уют в вашей спальне.",
    material: "Сатин",
  },
  {
    id: 18,
    name: "Простыня 'Пудрово-бежевый'",
    category: "Простыня",
    photo: "bedding33",
    complect: [],
    color: "Бежевый",
    price: 9000,
    special: "none",
    about:
      "Нежная простыня из сатина, добавляющая мягкости и уюта вашему пространству, станет отличным выбором для вашей спальни.",
    material: "Сатин",
  },
  {
    id: 19,
    name: "Простыня 'Васильково-синий'",
    category: "Простыня",
    photo: "bedding34",
    complect: [],
    color: "Синий",
    price: 8000,
    special: "none",
    about:
      "Простыня яркого цвета из сатина, которая добавит вашей спальне свежести и стиля.",
    material: "Сатин",
  },
  {
    id: 20,
    name: "Простыня 'Вишнево-Ягодный'",
    category: "Простыня",
    photo: "bedding35",
    complect: [],
    color: "Красный",
    price: 15000,
    special: "none",
    about:
      "Яркая простыня из сатина, которая добавит вашему интерьеру игривости и теплоты, станет ярким акцентом в вашем пространстве.",
    material: "Сатин",
  },
  // Обычная одежда
  {
    id: 21,
    name: "Рубашка женская серая",
    category: "Одежда",
    photo: "clothes1",
    complect: [],
    color: "Серый",
    price: 15000,
    special: "none",
    about:
      "Эта женская рубашка серая, идеально подходит для повседневного ношения. Изготовлена из высококачественного шелка, обеспечивающего комфорт и стиль. Легкий и воздушный материал делает ее идеальной для любого сезона.",
    material: "Шелк",
  },
  {
    id: 22,
    name: "Рубашка женская синяя",
    category: "Одежда",
    photo: "clothes2",
    complect: [],
    color: "Синий",
    price: 15000,
    special: "none",
    about:
      "Эта стильная синяя рубашка подчеркнет ваш индивидуальный стиль. Изготовлена из шелка, она мягкая на ощупь и дышащая. Отлично подходит как для офисных, так и для вечерних нарядов.",
    material: "Шелк",
  },
  {
    id: 23,
    name: "Рубашка женская бежевая",
    category: "Одежда",
    photo: "clothes3",
    complect: [],
    color: "Бежевый",
    price: 17000,
    special: "none",
    about:
      "Эта бежевая рубашка создаст изысканный образ в любом наряде. Шелковый материал обеспечивает непревзойденный комфорт и стиль. Идеальный выбор для любого мероприятия.",
    material: "Шелк",
  },
  {
    id: 24,
    name: "Топ шелковый на подкладке графитовый",
    category: "Одежда",
    photo: "clothes4",
    complect: [],
    color: "Серый",
    price: 12000,
    special: "none",
    about:
      "Графитовый шелковый топ с подкладкой для дополнительного комфорта. Идеален для создания многослойных образов. Легкий и элегантный, он прекрасно подходит для вечерних выходов.",
    material: "Шелк",
  },
  {
    id: 25,
    name: "Топ шелковый на подкладке жемчужный",
    category: "Одежда",
    photo: "clothes5",
    complect: [],
    color: "Белый",
    price: 12000,
    special: "none",
    about:
      "Этот жемчужный топ из шелка привнесет элегантность в ваш гардероб. Удобная подкладка обеспечивает максимальный комфорт. Идеально подходит как для повседневного, так и для праздничного стиля.",
    material: "Шелк",
  },
  {
    id: 26,
    name: "Топ шелковый на подкладке песочный",
    category: "Одежда",
    photo: "clothes6",
    complect: [],
    color: "Бежевый",
    price: 12000,
    special: "none",
    about:
      "Этот песочный топ из шелка сочетает в себе стиль и комфорт. Он прекрасно сидит на фигуре и отлично подходит для сочетания с джинсами или юбками. Идеальный выбор для теплых дней.",
    material: "Шелк",
  },
  {
    id: 27,
    name: "Топ шелковый на подкладке синий",
    category: "Одежда",
    photo: "clothes7",
    complect: [],
    color: "Синий",
    price: 12000,
    special: "none",
    about:
      "Синий шелковый топ с подкладкой – это изысканный элемент вашего гардероба. Легкий и дышащий материал обеспечивает комфорт в течение всего дня. Подходит для любого случая.",
    material: "Шелк",
  },
  {
    id: 28,
    name: "Шелковое платье белое",
    category: "Одежда",
    photo: "clothes8",
    complect: [],
    color: "Белый",
    price: 23000,
    special: "none",
    about:
      "Это белое шелковое платье – символ изящества и стиля. Оно идеально подходит для особых случаев и создает романтичный образ. Шелковый материал дарит комфорт и легкость.",
    material: "Шелк",
  },
  {
    id: 29,
    name: "Шелковый халат кимоно маки",
    category: "Одежда",
    photo: "clothes9",
    complect: [],
    color: "Белый",
    price: 53000,
    special: "none",
    about:
      "Шелковый халат кимоно с нежным принтом маки – это идеальное сочетание уюта и стиля. Он прекрасно подходит для домашних и расслабляющих вечеров. Легкий и дышащий материал создает ощущение свободы.",
    material: "Шелк",
  },
  {
    id: 30,
    name: "Шелковый халат бореаль",
    category: "Одежда",
    photo: "clothes10",
    complect: [],
    color: "Синий",
    price: 57000,
    special: "none",
    about:
      "Этот бореальный шелковый халат – воплощение элегантности. Он отлично подходит для уютных вечеров дома или как верхняя одежда на выход. Шелк дарит невероятное ощущение комфорта.",
    material: "Шелк",
  },
  {
    id: 31,
    name: "Декоративная подушка 'Дельта'",
    category: "Аксессуары",
    photo: "accessories1",
    complect: [],
    color: "special",
    price: 12000,
    special: "none",
    about:
      "Эта декоративная подушка 'Дельта' добавит стиль и уют в ваш интерьер. Яркие цвета и уникальный дизайн создают атмосферу тепла. Подходит для любого помещения.",
    material: "Шелк",
  },
  {
    id: 32,
    name: "Декоративная подушка 'Чыжики-Пыжики'",
    category: "Аксессуары",
    photo: "accessories2",
    complect: [],
    color: "special",
    price: 13000,
    special: "none",
    about:
      "Подушка 'Чыжики-Пыжики' станет отличным акцентом в вашем интерьере. Смешанные текстуры и оригинальный дизайн добавляют индивидуальности. Идеально подходит для вашего дивана или кровати.",
    material: "Шелк",
  },
  {
    id: 33,
    name: "Сувенирная подушка",
    category: "Аксессуары",
    photo: "accessories3",
    complect: [],
    color: "special",
    price: 3500,
    special: "none",
    about:
      "Эта сувенирная подушка станет замечательным подарком или украшением. Она компактная и удобная, легко впишется в любой интерьер. Яркие цвета и принты привнесут радость в ваш дом.",
    material: "Шелк",
  },
  {
    id: 34,
    name: "Плед кашемировый",
    category: "Аксессуары",
    photo: "accessories4",
    complect: [],
    color: "Серый",
    price: 45000,
    special: "none",
    about:
      "Кашемировый плед – это не просто элемент декора, а настоящая роскошь для вашего дома. Он невероятно мягкий и теплый, идеально подходит для холодных вечеров. Элегантный серый цвет впишется в любой интерьер.",
    material: "Кашемир",
  },
  {
    id: 35,
    name: "Маска для сна 'Нежность'",
    category: "Аксессуары",
    photo: "accessories5",
    complect: [],
    color: "Бежевый",
    price: 5000,
    special: "none",
    about:
      "Маска для сна 'Нежность' поможет вам насладиться спокойным сном. Она сделана из мягкого материала, который не раздражает кожу. Идеально подходит для использования дома или в поездках.",
    material: "Шелк",
  },
  {
    id: 36,
    name: "Маска для сна 'Шалость'",
    category: "Аксессуары",
    photo: "accessories6",
    complect: [],
    color: "Синий",
    price: 5000,
    special: "none",
    about:
      "Маска для сна с озорным дизайном, обеспечивающая качественный отдых. Отличный аксессуар для путешествий и дома.",
    material: "Шелк",
  },
  {
    id: 37,
    name: "Аромат 'Свежесть утра'",
    category: "Ароматы",
    photo: "aroma",
    complect: [],
    color: "special",
    price: 4900,
    special: "none",
    about:
      "Освежающий аромат, придающий ощущение бодрого утра. Он пробуждает и заряжает энергией на весь день.",
    material: "none",
  },
  {
    id: 38,
    name: "Аромат 'Лесная прохлада'",
    category: "Ароматы",
    photo: "aroma",
    complect: [],
    color: "special",
    price: 5300,
    special: "none",
    about:
      "Аромат лесной свежести, погружающий в атмосферу природы. Идеален для тех, кто ценит свежие, натуральные ноты.",
    material: "none",
  },
  {
    id: 39,
    name: "Аромат 'Теплый закат'",
    category: "Ароматы",
    photo: "aroma",
    complect: [],
    color: "special",
    price: 6100,
    special: "none",
    about:
      "Теплый и уютный аромат, напоминающий о закате летнего дня. Его глубокие ноты создают атмосферу спокойствия и расслабления.",
    material: "none",
  },
  {
    id: 40,
    name: "Аромат 'Морской бриз'",
    category: "Ароматы",
    photo: "aroma",
    complect: [],
    color: "special",
    price: 3400,
    special: "none",
    about:
      "Освежающий аромат, в котором ощущается морской ветер и волны. Прекрасный выбор для тех, кто любит морские ароматы.",
    material: "none",
  },

  // Special коллекция Сказки

  {
    id: 42,
    name: "Наволочка 'Алконост'",
    category: "Наволочка",
    photo: "special11",
    complect: [],
    color: "special",
    price: 9000,
    special: "Сказки",
    about:
      "Наслаждайтесь сказочным дизайном с наволочкой 'Алконост'. Идеально подходит для создания уюта в вашем интерьере. Вдохновленная мифами, она добавляет волшебства вашему сну.",
    material: "Шелк и Сатин",
  },
  {
    id: 43,
    name: "Наволочка 'Таинственный лес'",
    category: "Наволочка",
    photo: "special12",
    complect: [],
    color: "special",
    price: 8000,
    special: "Сказки",
    about:
      "Погружение в атмосферу загадочного леса с наволочкой 'Таинственный лес'. Идеально подходит для романтического и спокойного отдыха. Каждая деталь выполнена с любовью и вниманием к качеству.",
    material: "Шелк и Сатин",
  },
  {
    id: 44,
    name: "Наволочка 'Мезенская роспись'",
    category: "Наволочка",
    photo: "special13",
    complect: [],
    color: "special",
    price: 7000,
    special: "Сказки",
    about:
      "Наволочка 'Мезенская роспись' украсит ваш сон яркими красками. Вдохновленная народным искусством, она добавит колорита вашему пространству. Подходит для любого стиля интерьера.",
    material: "Шелк и Сатин",
  },
  {
    id: 45,
    name: "Наволочка 'Цветок папоротника'",
    category: "Наволочка",
    photo: "special14",
    complect: [],
    color: "special",
    price: 8400,
    special: "Сказки",
    about:
      "Наволочка 'Цветок папоротника' — это символ природы и гармонии. Создайте уютную атмосферу в спальне с этим уникальным дизайном. Каждый элемент выполнен из высококачественных материалов.",
    material: "Шелк и Сатин",
  },

  // Special коллекция Узоры
  {
    id: 46,
    name: "Наволочка 'Узоры'",
    category: "Наволочка",
    photo: "special21",
    complect: [],
    color: "special",
    price: 9000,
    special: "Узоры",
    about:
      "Элегантная наволочка 'Узоры' привнесет стиль в любой интерьер. Идеально подходит для создания утонченной атмосферы. Качественные материалы обеспечивают комфорт и долговечность.",
    material: "Шелк и Сатин",
  },
  {
    id: 47,
    name: "Наволочка 'Узоры'",
    category: "Наволочка",
    photo: "special22",
    complect: [],
    color: "special",
    price: 8000,
    special: "Узоры",
    about:
      "Наволочка 'Узоры' — это идеальный выбор для любителей классического стиля. Обеспечивает комфорт и уют во время сна. Прекрасно дополнит вашу коллекцию постельного белья.",
    material: "Шелк и Сатин",
  },
  {
    id: 48,
    name: "Наволочка 'Узоры'",
    category: "Наволочка",
    photo: "special23",
    complect: [],
    color: "special",
    price: 7600,
    special: "Узоры",
    about:
      "Насладитесь утонченным дизайном с наволочкой 'Узоры'. Прекрасно подойдет для создания гармоничного интерьера. Высококачественные материалы гарантируют долгий срок службы.",
    material: "Шелк и Сатин",
  },
  {
    id: 49,
    name: "Наволочка 'Узоры'",
    category: "Наволочка",
    photo: "special24",
    complect: [],
    color: "special",
    price: 6800,
    special: "Узоры",
    about:
      "Наволочка 'Узоры' добавит изысканности вашему интерьеру. Идеальна для создания уютного пространства для сна. Каждая деталь разработана для вашего комфорта.",
    material: "Шелк и Сатин",
  },

  // Special коллекция Композиторы
  {
    id: 50,
    name: "Наволочка 'Полночь'",
    category: "Наволочка",
    photo: "special31",
    complect: [],
    color: "special",
    price: 8000,
    special: "Композиторы",
    about:
      "Погрузитесь в мир музыки с наволочкой 'Полночь'. Элегантный дизайн создаст атмосферу спокойствия и уюта. Идеально подходит для ценителей искусства.",
    material: "Шелк и Сатин",
  },
  {
    id: 51,
    name: "Наволочка 'Утро'",
    category: "Наволочка",
    photo: "special32",
    complect: [],
    color: "special",
    price: 7500,
    special: "Композиторы",
    about:
      "Наволочка 'Утро' — это символ свежести и нового начала. Создайте вдохновляющую атмосферу в вашем интерьере. Высококачественные материалы обеспечивают комфорт во время сна.",
    material: "Шелк и Сатин",
  },
  {
    id: 52,
    name: "Наволочка 'Заря'",
    category: "Наволочка",
    photo: "special33",
    complect: [],
    color: "special",
    price: 6800,
    special: "Композиторы",
    about:
      "Пробудите свою креативность с наволочкой 'Заря'. Идеально подходит для артистичных людей, которые ценят комфорт и стиль. Каждая деталь продумана для вашего удовольствия.",
    material: "Шелк и Сатин",
  },
  {
    id: 53,
    name: "Наволочка 'Рассвет'",
    category: "Наволочка",
    photo: "special34",
    complect: [],
    color: "special",
    price: 8000,
    special: "Композиторы",
    about:
      "Наволочка 'Рассвет' привнесет в ваш дом атмосферу спокойствия и гармонии. Идеально подойдет для создания уютного пространства для отдыха. Используйте её для улучшения интерьера.",
    material: "Шелк и Сатин",
  },

  // Special коллекция Санкт Петербург
  {
    id: 54,
    name: "Наволочка 'Силуэты'",
    category: "Наволочка",
    photo: "special41",
    complect: [],
    color: "special",
    price: 7000,
    special: "Санкт Петербург",
    about:
      "Наволочка 'Силуэты' вдохновлена красотой Санкт-Петербурга. Создайте атмосферу утонченности в вашем интерьере. Каждый элемент выполнен с заботой о вашем комфорте.",
    material: "Шелк и Сатин",
  },
  {
    id: 55,
    name: "Наволочка 'Фонтанка'",
    category: "Наволочка",
    photo: "special42",
    complect: [],
    color: "special",
    price: 6500,
    special: "Санкт Петербург",
    about:
      "Наволочка 'Фонтанка' перенесет вас в волшебный мир петербургских водоемов. Идеально подходит для создания расслабляющей атмосферы. Сделайте ваш сон еще более приятным.",
    material: "Шелк и Сатин",
  },
  {
    id: 56,
    name: "Наволочка 'Дельта невы'",
    category: "Наволочка",
    photo: "special43",
    complect: [],
    color: "special",
    price: 7400,
    special: "Санкт Петербург",
    about:
      "Наслаждайтесь красотой наволочки 'Дельта невы'. Она добавит шарма вашему интерьеру и создаст уютную атмосферу для сна. Высококачественные материалы обеспечивают комфорт.",
    material: "Шелк и Сатин",
  },
  {
    id: 57,
    name: "Наволочка 'Чернильница'",
    category: "Наволочка",
    photo: "special44",
    complect: [],
    color: "special",
    price: 7900,
    special: "Санкт Петербург",
    about:
      "Наволочка 'Чернильница' подарит вашему интерьеру оригинальность и стиль. Идеально подходит для создания креативного пространства. Приятные материалы гарантируют комфорт во время сна.",
    material: "Шелк и Сатин",
  },
  // Special коллекция Степи
  {
    id: 58,
    name: "Наволочка 'Алтайская степь'",
    category: "Наволочка",
    photo: "special51",
    complect: [],
    color: "special",
    price: 8400,
    special: "Степи",
    about:
      "Погрузитесь в атмосферу великолепия Алтая с этой уникальной наволочкой. Она создаст уют в вашем интерьере, добавляя нотки природы. Комфортные материалы обеспечивают спокойный сон.",
    material: "Шелк и Сатин",
  },
  {
    id: 59,
    name: "Наволочка 'Донская степь'",
    category: "Наволочка",
    photo: "special52",
    complect: [],
    color: "special",
    price: 6300,
    special: "Степи",
    about:
      "Наволочка 'Донская степь' привнесет в ваш дом атмосферу простора и свободы. Идеальный выбор для ценителей стиля и качества. Высококачественные материалы обеспечивают комфорт во время сна.",
    material: "Шелк и Сатин",
  },
  {
    id: 60,
    name: "Наволочка 'Калмыцкая степь'",
    category: "Наволочка",
    photo: "special53",
    complect: [],
    color: "special",
    price: 8000,
    special: "Степи",
    about:
      "Эта наволочка подарит вам чувство спокойствия и умиротворения, навеянное красотой калмыцкой природы. Создайте уют в своем интерьере с уникальным дизайном. Комфортные материалы гарантируют приятный сон.",
    material: "Шелк и Сатин",
  },
  {
    id: 61,
    name: "Наволочка 'Сибирская степь'",
    category: "Наволочка",
    photo: "special54",
    complect: [],
    color: "special",
    price: 7200,
    special: "Степи",
    about:
      "Наволочка 'Сибирская степь' — это ода бескрайним просторам Сибири. Она добавит вашему интерьеру природной свежести и стиля. Высококачественные материалы обеспечивают комфорт.",
    material: "Шелк и Сатин",
  },

  // Special коллекция Агиттекстиль
  {
    id: 62,
    name: "Наволочка 'Павильон'",
    category: "Наволочка",
    photo: "special61",
    complect: [],
    color: "special",
    price: 5300,
    special: "Агиттекстиль",
    about:
      "Наволочка 'Павильон' — это стильный акцент для вашего интерьера. Создайте уютное пространство для отдыха с этой изысканной моделью. Комфортные материалы обеспечивают приятный сон.",
    material: "Шелк и Сатин",
  },
  {
    id: 63,
    name: "Наволочка 'Щедрое лето'",
    category: "Наволочка",
    photo: "special62",
    complect: [],
    color: "special",
    price: 8000,
    special: "Агиттекстиль",
    about:
      "Создайте атмосферу тепла и радости с наволочкой 'Щедрое лето'. Идеальный выбор для ярких акцентов в интерьере. Высококачественные материалы гарантируют комфорт.",
    material: "Шелк и Сатин",
  },
  {
    id: 64,
    name: "Наволочка 'Оммаж'",
    category: "Наволочка",
    photo: "special63",
    complect: [],
    color: "special",
    price: 7500,
    special: "Агиттекстиль",
    about:
      "Наволочка 'Оммаж' — это дань уважения классическому стилю. Создайте изысканную атмосферу в вашем доме с этой уникальной моделью. Комфортные материалы обеспечивают отличный сон.",
    material: "Шелк и Сатин",
  },
  {
    id: 65,
    name: "Наволочка 'Первоцвет'",
    category: "Наволочка",
    photo: "special64",
    complect: [],
    color: "special",
    price: 6800,
    special: "Агиттекстиль",
    about:
      "Погрузитесь в мир весеннего пробуждения с наволочкой 'Первоцвет'. Она добавит свежести вашему интерьеру и подарит комфорт. Высококачественные материалы обеспечивают приятный сон.",
    material: "Шелк и Сатин",
  },
];
