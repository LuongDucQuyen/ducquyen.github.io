import { list } from "./editing/variableHeader.js";
export var menu = () => {
  return( list.map((item) => {
    let menu2 = item.value.map((item2) => {
      let menu3 = item2.value.map((item3) => {
        return `<li id="${item3.id}"><a href="${item3.link}">${item3.title3}</a></li>`;
      });
      return `<li id="${item2.id}" class="item_list1" onmouseover="showMenu2(${item2.id})" onmouseout="closeMenu2(${item2.id})"><a href="${item2.link}">${item2.title2}</a><ul class="menu_list3">${menu3}</ul> </li> `;
    });
    var emlementMenu = `<li id="${item.id}" class="list1" onmousedown = "showMenu(${item.id})">${item.title}<ul class="menu_list2">${menu2}</ul></li>`;
    return emlementMenu;
  })
  );
};