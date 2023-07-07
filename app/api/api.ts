import { Proxied } from "@/base/rpc/proxied";
import { ContextMenuService } from "@/main/services/contextmenu-service";
import { FileSystemService } from "@/main/services/filesystem-service";
import { MenuService } from "@/main/services/menu-service";
import { ProxyService } from "@/main/services/proxy-service";
import { UpgradeService } from "@/main/services/upgrade-service";
import { WindowProcessManagementService } from "@/main/services/window-management-service";
import { APPService } from "@/renderer/services/app-service";

export interface APIShape {
  appService: Proxied<APPService>;
}

// type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;

// type RemoveLastParameter<T extends (...args: any[]) => any> = (
//   ...args: Pop<Parameters<T>>
// ) => ReturnType<T>;

// type RemoveLastParameterForShape<
//   T extends { [K in keyof T]: (...args: any[]) => any }
// > = {
//   [K in keyof T]: RemoveLastParameter<T[K]>;
// };

export interface MainAPIShape {
  windowProcessManagementService: Proxied<WindowProcessManagementService>;
  fileSystemService: Proxied<FileSystemService>;
  contextMenuService: Proxied<ContextMenuService>;
  menuService: Proxied<MenuService>;
  upgradeService: Proxied<UpgradeService>;
  proxyService: Proxied<ProxyService>;
}