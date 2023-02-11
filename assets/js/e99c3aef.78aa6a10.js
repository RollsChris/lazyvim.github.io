"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),s=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,c]=f({queryString:t,groupId:r}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var v=t(2389);const b="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==i&&(d(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function T(e){const n=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function _(e){const n=(0,v.Z)();return a.createElement(T,(0,r.Z)({key:String(n)},e))}},6897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),l=t(4866),o=t(5162);const i={},s="Editor",c={unversionedId:"plugins/editor",id:"plugins/editor",title:"Editor",description:"neo-tree.nvim",source:"@site/docs/plugins/editor.md",sourceDirName:"plugins",slug:"/plugins/editor",permalink:"/plugins/editor",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/editor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colorscheme",permalink:"/plugins/colorscheme"},next:{title:"JSON",permalink:"/plugins/extras/lang.json"}},u={},d=[{value:"neo-tree.nvim",id:"neo-treenvim",level:2},{value:"nvim-spectre",id:"nvim-spectre",level:2},{value:"telescope.nvim",id:"telescopenvim",level:2},{value:"leap.nvim",id:"leapnvim",level:2},{value:"flit.nvim",id:"flitnvim",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"gitsigns.nvim",id:"gitsignsnvim",level:2},{value:"vim-illuminate",id:"vim-illuminate",level:2},{value:"mini.bufremove",id:"minibufremove",level:2},{value:"trouble.nvim",id:"troublenvim",level:2},{value:"todo-comments.nvim",id:"todo-commentsnvim",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"editor"},"Editor"),(0,a.kt)("h2",{id:"neo-treenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")),(0,a.kt)("p",null," file explorer"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  filesystem = {\n    bind_to_cwd = false,\n    follow_current_file = true,\n  },\n  window = {\n    mappings = {\n      ["<space>"] = "none",\n    },\n  },\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neo-tree/neo-tree.nvim",\n  cmd = "Neotree",\n  keys = {\n    {\n      "<leader>fe",\n      function()\n        require("neo-tree.command").execute({ toggle = true, dir = require("lazyvim.util").get_root() })\n      end,\n      desc = "Explorer NeoTree (root dir)",\n    },\n    {\n      "<leader>fE",\n      function()\n        require("neo-tree.command").execute({ toggle = true, dir = vim.loop.cwd() })\n      end,\n      desc = "Explorer NeoTree (cwd)",\n    },\n    { "<leader>e", "<leader>fe", desc = "Explorer NeoTree (root dir)", remap = true },\n    { "<leader>E", "<leader>fE", desc = "Explorer NeoTree (cwd)", remap = true },\n  },\n  deactivate = function()\n    vim.cmd([[Neotree close]])\n  end,\n  init = function()\n    vim.g.neo_tree_remove_legacy_commands = 1\n    if vim.fn.argc() == 1 then\n      local stat = vim.loop.fs_stat(vim.fn.argv(0))\n      if stat and stat.type == "directory" then\n        require("neo-tree")\n      end\n    end\n  end,\n  opts = {\n    filesystem = {\n      bind_to_cwd = false,\n      follow_current_file = true,\n    },\n    window = {\n      mappings = {\n        ["<space>"] = "none",\n      },\n    },\n  },\n}\n')))),(0,a.kt)("h2",{id:"nvim-spectre"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/windwp/nvim-spectre"},"nvim-spectre")),(0,a.kt)("p",null," search/replace in multiple files"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "windwp/nvim-spectre",\n  -- stylua: ignore\n  keys = {\n    { "<leader>sr", function() require("spectre").open() end, desc = "Replace in files (Spectre)" },\n  },\n}\n')))),(0,a.kt)("h2",{id:"telescopenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")),(0,a.kt)("p",null," fuzzy finder"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  defaults = {\n    prompt_prefix = "\uf054 ",\n    selection_caret = "\uf44a ",\n    mappings = {\n      i = {\n        ["<c-t>"] = function(...)\n          return require("trouble.providers.telescope").open_with_trouble(...)\n        end,\n        ["<a-i>"] = function()\n          Util.telescope("find_files", { no_ignore = true })()\n        end,\n        ["<a-h>"] = function()\n          Util.telescope("find_files", { hidden = true })()\n        end,\n        ["<C-Down>"] = function(...)\n          return require("telescope.actions").cycle_history_next(...)\n        end,\n        ["<C-Up>"] = function(...)\n          return require("telescope.actions").cycle_history_prev(...)\n        end,\n        ["<C-j>"] = function(...)\n          return require("telescope.actions").move_selection_next(...)\n        end,\n        ["<C-k>"] = function(...)\n          return require("telescope.actions").move_selection_previous(...)\n        end,\n        ["<C-n>"] = function(...)\n          return require("telescope.actions").preview_scrolling_down(...)\n        end,\n        ["<C-p>"] = function(...)\n          return require("telescope.actions").preview_scrolling_up(...)\n        end,\n      },\n      n = {\n        ["q"] = function(...)\n          return require("telescope.actions").close(...)\n        end,\n      },\n    },\n  },\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-telescope/telescope.nvim",\n  cmd = "Telescope",\n  version = false, -- telescope did only one release, so use HEAD for now\n  keys = {\n    { "<leader>,", "<cmd>Telescope buffers show_all_buffers=true<cr>", desc = "Switch Buffer" },\n    { "<leader>/", Util.telescope("live_grep"), desc = "Find in Files (Grep)" },\n    { "<leader>:", "<cmd>Telescope command_history<cr>", desc = "Command History" },\n    { "<leader><space>", Util.telescope("files"), desc = "Find Files (root dir)" },\n    -- find\n    { "<leader>fb", "<cmd>Telescope buffers<cr>", desc = "Buffers" },\n    { "<leader>ff", Util.telescope("files"), desc = "Find Files (root dir)" },\n    { "<leader>fF", Util.telescope("files", { cwd = false }), desc = "Find Files (cwd)" },\n    { "<leader>fr", "<cmd>Telescope oldfiles<cr>", desc = "Recent" },\n    -- git\n    { "<leader>gc", "<cmd>Telescope git_commits<CR>", desc = "commits" },\n    { "<leader>gs", "<cmd>Telescope git_status<CR>", desc = "status" },\n    -- search\n    { "<leader>sa", "<cmd>Telescope autocommands<cr>", desc = "Auto Commands" },\n    { "<leader>sb", "<cmd>Telescope current_buffer_fuzzy_find<cr>", desc = "Buffer" },\n    { "<leader>sc", "<cmd>Telescope command_history<cr>", desc = "Command History" },\n    { "<leader>sC", "<cmd>Telescope commands<cr>", desc = "Commands" },\n    { "<leader>sd", "<cmd>Telescope diagnostics<cr>", desc = "Diagnostics" },\n    { "<leader>sg", Util.telescope("live_grep"), desc = "Grep (root dir)" },\n    { "<leader>sG", Util.telescope("live_grep", { cwd = false }), desc = "Grep (cwd)" },\n    { "<leader>sh", "<cmd>Telescope help_tags<cr>", desc = "Help Pages" },\n    { "<leader>sH", "<cmd>Telescope highlights<cr>", desc = "Search Highlight Groups" },\n    { "<leader>sk", "<cmd>Telescope keymaps<cr>", desc = "Key Maps" },\n    { "<leader>sM", "<cmd>Telescope man_pages<cr>", desc = "Man Pages" },\n    { "<leader>sm", "<cmd>Telescope marks<cr>", desc = "Jump to Mark" },\n    { "<leader>so", "<cmd>Telescope vim_options<cr>", desc = "Options" },\n    { "<leader>sw", Util.telescope("grep_string"), desc = "Word (root dir)" },\n    { "<leader>sW", Util.telescope("grep_string", { cwd = false }), desc = "Word (cwd)" },\n    { "<leader>uC", Util.telescope("colorscheme", { enable_preview = true }), desc = "Colorscheme with preview" },\n    {\n      "<leader>ss",\n      Util.telescope("lsp_document_symbols", {\n        symbols = {\n          "Class",\n          "Function",\n          "Method",\n          "Constructor",\n          "Interface",\n          "Module",\n          "Struct",\n          "Trait",\n          "Field",\n          "Property",\n        },\n      }),\n      desc = "Goto Symbol",\n    },\n  },\n  opts = {\n    defaults = {\n      prompt_prefix = "\uf054 ",\n      selection_caret = "\uf44a ",\n      mappings = {\n        i = {\n          ["<c-t>"] = function(...)\n            return require("trouble.providers.telescope").open_with_trouble(...)\n          end,\n          ["<a-i>"] = function()\n            Util.telescope("find_files", { no_ignore = true })()\n          end,\n          ["<a-h>"] = function()\n            Util.telescope("find_files", { hidden = true })()\n          end,\n          ["<C-Down>"] = function(...)\n            return require("telescope.actions").cycle_history_next(...)\n          end,\n          ["<C-Up>"] = function(...)\n            return require("telescope.actions").cycle_history_prev(...)\n          end,\n          ["<C-j>"] = function(...)\n            return require("telescope.actions").move_selection_next(...)\n          end,\n          ["<C-k>"] = function(...)\n            return require("telescope.actions").move_selection_previous(...)\n          end,\n          ["<C-n>"] = function(...)\n            return require("telescope.actions").preview_scrolling_down(...)\n          end,\n          ["<C-p>"] = function(...)\n            return require("telescope.actions").preview_scrolling_up(...)\n          end,\n        },\n        n = {\n          ["q"] = function(...)\n            return require("telescope.actions").close(...)\n          end,\n        },\n      },\n    },\n  },\n}\n')))),(0,a.kt)("h2",{id:"leapnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ggandor/leap.nvim"},"leap.nvim")),(0,a.kt)("p",null," easily jump to any location and enhanced f/t motions for Leap"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "ggandor/leap.nvim",\n  event = "VeryLazy",\n  dependencies = { { "ggandor/flit.nvim", opts = { labeled_modes = "nv" } } },\n  config = function(_, opts)\n    local leap = require("leap")\n    for k, v in pairs(opts) do\n      leap.opts[k] = v\n    end\n    leap.add_default_mappings(true)\n    vim.keymap.del({ "x", "o" }, "x")\n    vim.keymap.del({ "x", "o" }, "X")\n  end,\n}\n')))),(0,a.kt)("h2",{id:"flitnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ggandor/flit.nvim"},"flit.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { labeled_modes = "nv" }\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{ "ggandor/flit.nvim", opts = { labeled_modes = "nv" } }\n')))),(0,a.kt)("h2",{id:"which-keynvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,a.kt)("p",null," which-key"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  plugins = { spelling = true },\n}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/which-key.nvim",\n  event = "VeryLazy",\n  opts = {\n    plugins = { spelling = true },\n  },\n  config = function(_, opts)\n    local wk = require("which-key")\n    wk.setup(opts)\n    wk.register({\n      mode = { "n", "v" },\n      ["g"] = { name = "+goto" },\n      ["gz"] = { name = "+surround" },\n      ["]"] = { name = "+next" },\n      ["["] = { name = "+prev" },\n      ["<leader><tab>"] = { name = "+tabs" },\n      ["<leader>b"] = { name = "+buffer" },\n      ["<leader>c"] = { name = "+code" },\n      ["<leader>f"] = { name = "+file/find" },\n      ["<leader>g"] = { name = "+git" },\n      ["<leader>gh"] = { name = "+hunks" },\n      ["<leader>q"] = { name = "+quit/session" },\n      ["<leader>s"] = { name = "+search" },\n      ["<leader>sn"] = { name = "+noice" },\n      ["<leader>u"] = { name = "+ui" },\n      ["<leader>w"] = { name = "+windows" },\n      ["<leader>x"] = { name = "+diagnostics/quickfix" },\n    })\n  end,\n}\n')))),(0,a.kt)("h2",{id:"gitsignsnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/lewis6991/gitsigns.nvim"},"gitsigns.nvim")),(0,a.kt)("p",null," git signs"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  signs = {\n    add = { text = "\u258e" },\n    change = { text = "\u258e" },\n    delete = { text = "\uf909" },\n    topdelete = { text = "\uf909" },\n    changedelete = { text = "\u258e" },\n    untracked = { text = "\u258e" },\n  },\n  on_attach = function(buffer)\n    local gs = package.loaded.gitsigns\n\n    local function map(mode, l, r, desc)\n      vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })\n    end\n\n    -- stylua: ignore start\n    map("n", "]h", gs.next_hunk, "Next Hunk")\n    map("n", "[h", gs.prev_hunk, "Prev Hunk")\n    map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")\n    map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")\n    map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")\n    map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")\n    map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")\n    map("n", "<leader>ghp", gs.preview_hunk, "Preview Hunk")\n    map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")\n    map("n", "<leader>ghd", gs.diffthis, "Diff This")\n    map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")\n    map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")\n  end,\n}\n'))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lewis6991/gitsigns.nvim",\n  event = { "BufReadPre", "BufNewFile" },\n  opts = {\n    signs = {\n      add = { text = "\u258e" },\n      change = { text = "\u258e" },\n      delete = { text = "\uf909" },\n      topdelete = { text = "\uf909" },\n      changedelete = { text = "\u258e" },\n      untracked = { text = "\u258e" },\n    },\n    on_attach = function(buffer)\n      local gs = package.loaded.gitsigns\n\n      local function map(mode, l, r, desc)\n        vim.keymap.set(mode, l, r, { buffer = buffer, desc = desc })\n      end\n\n      -- stylua: ignore start\n      map("n", "]h", gs.next_hunk, "Next Hunk")\n      map("n", "[h", gs.prev_hunk, "Prev Hunk")\n      map({ "n", "v" }, "<leader>ghs", ":Gitsigns stage_hunk<CR>", "Stage Hunk")\n      map({ "n", "v" }, "<leader>ghr", ":Gitsigns reset_hunk<CR>", "Reset Hunk")\n      map("n", "<leader>ghS", gs.stage_buffer, "Stage Buffer")\n      map("n", "<leader>ghu", gs.undo_stage_hunk, "Undo Stage Hunk")\n      map("n", "<leader>ghR", gs.reset_buffer, "Reset Buffer")\n      map("n", "<leader>ghp", gs.preview_hunk, "Preview Hunk")\n      map("n", "<leader>ghb", function() gs.blame_line({ full = true }) end, "Blame Line")\n      map("n", "<leader>ghd", gs.diffthis, "Diff This")\n      map("n", "<leader>ghD", function() gs.diffthis("~") end, "Diff This ~")\n      map({ "o", "x" }, "ih", ":<C-U>Gitsigns select_hunk<CR>", "GitSigns Select Hunk")\n    end,\n  },\n}\n')))),(0,a.kt)("h2",{id:"vim-illuminate"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/RRethy/vim-illuminate"},"vim-illuminate")),(0,a.kt)("p",null," references"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { delay = 200 }\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "RRethy/vim-illuminate",\n  event = { "BufReadPost", "BufNewFile" },\n  opts = { delay = 200 },\n  config = function(_, opts)\n    require("illuminate").configure(opts)\n    vim.api.nvim_create_autocmd("FileType", {\n      callback = function()\n        local buffer = vim.api.nvim_get_current_buf()\n        pcall(vim.keymap.del, "n", "]]", { buffer = buffer })\n        pcall(vim.keymap.del, "n", "[[", { buffer = buffer })\n      end,\n    })\n  end,\n  -- stylua: ignore\n  keys = {\n    { "]]", function() require("illuminate").goto_next_reference(false) end, desc = "Next Reference", },\n    { "[[", function() require("illuminate").goto_prev_reference(false) end, desc = "Prev Reference" },\n  },\n}\n')))),(0,a.kt)("h2",{id:"minibufremove"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.bufremove"},"mini.bufremove")),(0,a.kt)("p",null," buffer remove"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.bufremove",\n  -- stylua: ignore\n  keys = {\n    { "<leader>bd", function() require("mini.bufremove").delete(0, false) end, desc = "Delete Buffer" },\n    { "<leader>bD", function() require("mini.bufremove").delete(0, true) end, desc = "Delete Buffer (Force)" },\n  },\n}\n')))),(0,a.kt)("h2",{id:"troublenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/trouble.nvim"},"trouble.nvim")),(0,a.kt)("p",null," better diagnostics list and others"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { use_diagnostic_signs = true }\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/trouble.nvim",\n  cmd = { "TroubleToggle", "Trouble" },\n  opts = { use_diagnostic_signs = true },\n  keys = {\n    { "<leader>xx", "<cmd>TroubleToggle document_diagnostics<cr>", desc = "Document Diagnostics (Trouble)" },\n    { "<leader>xX", "<cmd>TroubleToggle workspace_diagnostics<cr>", desc = "Workspace Diagnostics (Trouble)" },\n    { "<leader>xL", "<cmd>TroubleToggle loclist<cr>", desc = "Location List (Trouble)" },\n    { "<leader>xQ", "<cmd>TroubleToggle quickfix<cr>", desc = "Quickfix List (Trouble)" },\n  },\n}\n')))),(0,a.kt)("h2",{id:"todo-commentsnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/todo-comments.nvim"},"todo-comments.nvim")),(0,a.kt)("p",null," todo comments"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/todo-comments.nvim",\n  cmd = { "TodoTrouble", "TodoTelescope" },\n  event = { "BufReadPost", "BufNewFile" },\n  config = true,\n  -- stylua: ignore\n  keys = {\n    { "]t", function() require("todo-comments").jump_next() end, desc = "Next todo comment" },\n    { "[t", function() require("todo-comments").jump_prev() end, desc = "Previous todo comment" },\n    { "<leader>xt", "<cmd>TodoTrouble<cr>", desc = "Todo (Trouble)" },\n    { "<leader>xT", "<cmd>TodoTrouble keywords=TODO,FIX,FIXME<cr>", desc = "Todo/Fix/Fixme (Trouble)" },\n    { "<leader>st", "<cmd>TodoTelescope<cr>", desc = "Todo" },\n  },\n}\n')))))}m.isMDXComponent=!0}}]);