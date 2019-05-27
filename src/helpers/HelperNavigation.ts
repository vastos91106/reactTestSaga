import NavigationItem from "../baseComponents/Navigation/NavigationItem/Props";

const Data: NavigationItem[] = [
    {
        Title: 'Все задачи',
        Link: '/tasks.html',
        Active: false
    },
    {
        Title: 'Мои задачи',
        Link: '/profile.html',
        Active: false
    }
];

const checkActiveItem = (pathname: string, item: NavigationItem) => {
    if (pathname === item.Link) {
        item.Active = true;
    }

    return item;
};

export const getMenu = (): NavigationItem[] => {
    const pathName = location.pathname;

    return Data.map((item) => {
        return checkActiveItem(pathName, item);
    });
};

export default getMenu;