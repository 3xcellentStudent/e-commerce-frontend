import model from "./navigation.json"

interface NavLink {
  text: string;
  href: string;
}

// 2. Описываем категорию (выпадающее меню)
interface NavCategory {
  text: string;
  menuItems: NavLink[];
}

// 3. Создаем объединенный тип для элементов массива
type NavItem = NavLink | NavCategory;

const typedModel: NavItem[] = model;

export default typedModel;