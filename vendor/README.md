# Vendor Dependencies

This directory contains external dependencies and mirrors for:

- **platform** - Platform-specific dependencies and polyfills
- **ui-kits** - External UI kit dependencies and customizations

## Structure

```
vendor/
├── platform/          # Platform-specific dependencies
│   ├── web/           # Web platform dependencies
│   ├── mobile/        # Mobile platform dependencies
│   └── desktop/       # Desktop platform dependencies
└── ui-kits/           # External UI kit mirrors
    ├── material/      # Material Design components
    ├── ant/           # Ant Design components  
    └── bootstrap/     # Bootstrap components
```

## Usage

These are typically git submodules or npm packages that are:
- Forked for customization
- Mirrored for reliability
- Modified for platform compatibility