# Tailwind CSS

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.tailwind" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    tailwindcss = {
      -- exclude a filetype from the default_config
      filetypes_exclude = { "markdown" },
      -- add additional filetypes to the default_config
      filetypes_include = {},
      -- to fully override the default_config, change the below
      -- filetypes = {}
    },
  },
  setup = {
    tailwindcss = function(_, opts)
      local tw = require("lspconfig.server_configurations.tailwindcss")
      opts.filetypes = opts.filetypes or {}

      -- Add default filetypes
      vim.list_extend(opts.filetypes, tw.default_config.filetypes)

      -- Remove excluded filetypes
      --- @param ft string
      opts.filetypes = vim.tbl_filter(function(ft)
        return not vim.tbl_contains(opts.filetypes_exclude or {}, ft)
      end, opts.filetypes)

      -- Add additional filetypes
      vim.list_extend(opts.filetypes, opts.filetypes_include)
    end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      tailwindcss = {
        -- exclude a filetype from the default_config
        filetypes_exclude = { "markdown" },
        -- add additional filetypes to the default_config
        filetypes_include = {},
        -- to fully override the default_config, change the below
        -- filetypes = {}
      },
    },
    setup = {
      tailwindcss = function(_, opts)
        local tw = require("lspconfig.server_configurations.tailwindcss")
        opts.filetypes = opts.filetypes or {}

        -- Add default filetypes
        vim.list_extend(opts.filetypes, tw.default_config.filetypes)

        -- Remove excluded filetypes
        --- @param ft string
        opts.filetypes = vim.tbl_filter(function(ft)
          return not vim.tbl_contains(opts.filetypes_exclude or {}, ft)
        end, opts.filetypes)

        -- Add additional filetypes
        vim.list_extend(opts.filetypes, opts.filetypes_include)
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  -- original LazyVim kind icon formatter
  local format_kinds = opts.formatting.format
  opts.formatting.format = function(entry, item)
    format_kinds(entry, item) -- add icons
    return require("tailwindcss-colorizer-cmp").formatter(entry, item)
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = {
    { "roobert/tailwindcss-colorizer-cmp.nvim", config = true },
  },
  opts = function(_, opts)
    -- original LazyVim kind icon formatter
    local format_kinds = opts.formatting.format
    opts.formatting.format = function(entry, item)
      format_kinds(entry, item) -- add icons
      return require("tailwindcss-colorizer-cmp").formatter(entry, item)
    end
  end,
}
```

</TabItem>

</Tabs>

## [tailwindcss-colorizer-cmp.nvim](https://github.com/roobert/tailwindcss-colorizer-cmp.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "roobert/tailwindcss-colorizer-cmp.nvim", config = true }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
