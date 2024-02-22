# Introduction

This project allows you to prepare BigCommerce theme files for your Customer's Canvas integration. It is an application for patching basic theme assets with your integration data.

# Requirements

To get started, you will need:
1. An active tenant in Customer's Canvas.
2. A registered [Storefront](https://customerscanvas.com/dev/backoffice/howto/register-storefront.html) of type BigCommerce in the tenant.
3. Installed Node.JS version 16 or higher

# Getting Started
Before running the application, you need to specify the parameters in the **gulp-config.json** file so that the application work with your storefront.

```json
"view": {
    "TenantId": 0,
    "StorefrontId": 0,
    "CCHubBaseUrl": "",
    "BigCommerceAdapterBaseUrl": ""
}
```

# Build and Test
Open the project folder in the terminal, for example, in the integrated terminal of VS Code, and execute the following commands sequentially:
```bash
npm install
npx gulp updateBigCommerceTheme
```

After this, a **theme** folder will appear in the project with prepared files that you can place in your BigCommerce theme.