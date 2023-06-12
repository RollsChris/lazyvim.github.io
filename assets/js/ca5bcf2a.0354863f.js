"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),i=t(6010);const a="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7462),i=t(7294),a=t(6010),o=t(2466),l=t(6550),u=t(1980),s=t(7392),c=t(12);function f(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??f(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,s]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=u??f;return d({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,a]),tabValues:a}}var b=t(2389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==l&&(f(n),u(r))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:p},o,{className:(0,a.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function _(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=g(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",h)},i.createElement(v,(0,r.Z)({},e,n)),i.createElement(_,(0,r.Z)({},e,n)))}function k(e){const n=(0,b.Z)();return i.createElement(w,(0,r.Z)({key:String(n)},e))}},3188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var r=t(7462),i=(t(7294),t(3905)),a=t(4866),o=t(5162);const l={},u="edgy.nvim",s={unversionedId:"plugins/extras/ui.edgy",id:"plugins/extras/ui.edgy",title:"edgy.nvim",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/plugins/extras/ui.edgy.md",sourceDirName:"plugins/extras",slug:"/plugins/extras/ui.edgy",permalink:"/plugins/extras/ui.edgy",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/extras/ui.edgy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neotest",permalink:"/plugins/extras/test.core"},next:{title:"Mini Animate",permalink:"/plugins/extras/ui.mini-animate"}},c={},f=[{value:"edgy.nvim",id:"edgynvim-1",level:2},{value:"neo-tree.nvim",id:"neo-treenvim",level:2},{value:"bufferline.nvim",id:"bufferlinenvim",level:2}],p={toc:f};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edgynvim"},"edgy.nvim"),(0,i.kt)("p",null,"To use this, add it to your ",(0,i.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ui.edgy" },\n    { import = "plugins" },\n  },\n})\n')),(0,i.kt)("h2",{id:"edgynvim-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/edgy.nvim"},"edgy.nvim")),(0,i.kt)("p",null," edgy"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  bottom = {\n    {\n      ft = "toggleterm",\n      size = { height = 0.4 },\n      filter = function(buf, win)\n        return vim.api.nvim_win_get_config(win).relative == ""\n      end,\n    },\n    {\n      ft = "noice",\n      size = { height = 0.4 },\n      filter = function(buf, win)\n        return vim.api.nvim_win_get_config(win).relative == ""\n      end,\n    },\n    {\n      ft = "lazyterm",\n      title = "LazyTerm",\n      size = { height = 0.4 },\n      filter = function(buf)\n        return not vim.b[buf].lazyterm_cmd\n      end,\n    },\n    "Trouble",\n    { ft = "qf", title = "QuickFix" },\n    {\n      ft = "help",\n      size = { height = 20 },\n      -- don\'t open help files in edgy that we\'re editing\n      filter = function(buf)\n        return vim.bo[buf].buftype == "help"\n      end,\n    },\n    { ft = "spectre_panel", size = { height = 0.4 } },\n    { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },\n  },\n  left = {\n    {\n      title = "Neo-Tree",\n      ft = "neo-tree",\n      filter = function(buf)\n        return vim.b[buf].neo_tree_source == "filesystem"\n      end,\n      pinned = true,\n      open = function()\n        vim.api.nvim_input("<esc><space>e")\n      end,\n      size = { height = 0.5 },\n    },\n    { title = "Neotest Summary", ft = "neotest-summary" },\n    {\n      title = "Neo-Tree Git",\n      ft = "neo-tree",\n      filter = function(buf)\n        return vim.b[buf].neo_tree_source == "git_status"\n      end,\n      pinned = true,\n      open = "Neotree position=right git_status",\n    },\n    {\n      title = "Neo-Tree Buffers",\n      ft = "neo-tree",\n      filter = function(buf)\n        return vim.b[buf].neo_tree_source == "buffers"\n      end,\n      pinned = true,\n      open = "Neotree position=top buffers",\n    },\n    {\n      ft = "Outline",\n      pinned = true,\n      open = "SymbolsOutline",\n    },\n    "neo-tree",\n  },\n  keys = {\n    -- increase width\n    ["<c-Right>"] = function(win)\n      win:resize("width", 2)\n    end,\n    -- decrease width\n    ["<c-Left>"] = function(win)\n      win:resize("width", -2)\n    end,\n    -- increase height\n    ["<c-Up>"] = function(win)\n      win:resize("height", 2)\n    end,\n    -- decrease height\n    ["<c-Down>"] = function(win)\n      win:resize("height", -2)\n    end,\n  },\n}\n'))),(0,i.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/edgy.nvim",\n  event = "VeryLazy",\n  keys = {\n    {\n      "<leader>ue",\n      function()\n        require("edgy").toggle()\n      end,\n      desc = "Edgy Toggle",\n    },\n    -- stylua: ignore\n    { "<leader>uE", function() require("edgy").select() end, desc = "Edgy Select Window" },\n  },\n  opts = {\n    bottom = {\n      {\n        ft = "toggleterm",\n        size = { height = 0.4 },\n        filter = function(buf, win)\n          return vim.api.nvim_win_get_config(win).relative == ""\n        end,\n      },\n      {\n        ft = "noice",\n        size = { height = 0.4 },\n        filter = function(buf, win)\n          return vim.api.nvim_win_get_config(win).relative == ""\n        end,\n      },\n      {\n        ft = "lazyterm",\n        title = "LazyTerm",\n        size = { height = 0.4 },\n        filter = function(buf)\n          return not vim.b[buf].lazyterm_cmd\n        end,\n      },\n      "Trouble",\n      { ft = "qf", title = "QuickFix" },\n      {\n        ft = "help",\n        size = { height = 20 },\n        -- don\'t open help files in edgy that we\'re editing\n        filter = function(buf)\n          return vim.bo[buf].buftype == "help"\n        end,\n      },\n      { ft = "spectre_panel", size = { height = 0.4 } },\n      { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },\n    },\n    left = {\n      {\n        title = "Neo-Tree",\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source == "filesystem"\n        end,\n        pinned = true,\n        open = function()\n          vim.api.nvim_input("<esc><space>e")\n        end,\n        size = { height = 0.5 },\n      },\n      { title = "Neotest Summary", ft = "neotest-summary" },\n      {\n        title = "Neo-Tree Git",\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source == "git_status"\n        end,\n        pinned = true,\n        open = "Neotree position=right git_status",\n      },\n      {\n        title = "Neo-Tree Buffers",\n        ft = "neo-tree",\n        filter = function(buf)\n          return vim.b[buf].neo_tree_source == "buffers"\n        end,\n        pinned = true,\n        open = "Neotree position=top buffers",\n      },\n      {\n        ft = "Outline",\n        pinned = true,\n        open = "SymbolsOutline",\n      },\n      "neo-tree",\n    },\n    keys = {\n      -- increase width\n      ["<c-Right>"] = function(win)\n        win:resize("width", 2)\n      end,\n      -- decrease width\n      ["<c-Left>"] = function(win)\n        win:resize("width", -2)\n      end,\n      -- increase height\n      ["<c-Up>"] = function(win)\n        win:resize("height", 2)\n      end,\n      -- decrease height\n      ["<c-Down>"] = function(win)\n        win:resize("height", -2)\n      end,\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"neo-treenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")),(0,i.kt)("p",null," prevent neo-tree from opening files in edgy windows"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types\n    or { "terminal", "Trouble", "qf", "Outline" }\n  table.insert(opts.open_files_do_not_replace_types, "edgy")\nend\n'))),(0,i.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neo-tree/neo-tree.nvim",\n  optional = true,\n  opts = function(_, opts)\n    opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types\n      or { "terminal", "Trouble", "qf", "Outline" }\n    table.insert(opts.open_files_do_not_replace_types, "edgy")\n  end,\n}\n')))),(0,i.kt)("h2",{id:"bufferlinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/bufferline.nvim"},"bufferline.nvim")),(0,i.kt)("p",null," Fix bufferline offsets when edgy is loaded"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local Offset = require("bufferline.offset")\n  if not Offset.edgy then\n    local get = Offset.get\n    Offset.get = function()\n      if package.loaded.edgy then\n        local layout = require("edgy.config").layout\n        local ret = { left = "", left_size = 0, right = "", right_size = 0 }\n        for _, pos in ipairs({ "left", "right" }) do\n          local sb = layout[pos]\n          if sb and #sb.wins > 0 then\n            local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)\n            ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#\u2502%*"\n            ret[pos .. "_size"] = sb.bounds.width\n          end\n        end\n        ret.total_size = ret.left_size + ret.right_size\n        if ret.total_size > 0 then\n          return ret\n        end\n      end\n      return get()\n    end\n    Offset.edgy = true\n  end\nend\n'))),(0,i.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/bufferline.nvim",\n  optional = true,\n  opts = function()\n    local Offset = require("bufferline.offset")\n    if not Offset.edgy then\n      local get = Offset.get\n      Offset.get = function()\n        if package.loaded.edgy then\n          local layout = require("edgy.config").layout\n          local ret = { left = "", left_size = 0, right = "", right_size = 0 }\n          for _, pos in ipairs({ "left", "right" }) do\n            local sb = layout[pos]\n            if sb and #sb.wins > 0 then\n              local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)\n              ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#\u2502%*"\n              ret[pos .. "_size"] = sb.bounds.width\n            end\n          end\n          ret.total_size = ret.left_size + ret.right_size\n          if ret.total_size > 0 then\n            return ret\n          end\n        end\n        return get()\n      end\n      Offset.edgy = true\n    end\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);