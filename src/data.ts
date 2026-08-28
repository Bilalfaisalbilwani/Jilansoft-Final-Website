/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  NavLink,
  StatItem,
  ServiceItem,
  SoftwareProduct,
  ProcessStep,
  PricingPlan,
} from './types';

import product1 from "./assets/product1.png";
import product2 from "./assets/product2.webp";
import product3 from "./assets/product3.webp";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";
import product7 from "./assets/product7.png";
import product8 from "./assets/product7.png";
import product9 from "./assets/product9.png";
import product10 from "./assets/product10.png";
import product11 from "./assets/product11.png";
import product12 from "./assets/product12.png";
import product13 from "./assets/product13.png";
import product14 from "./assets/product14.png";
import product15 from "./assets/product15.png";

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const heroStats: StatItem[] = [
  { number: '2009', label: 'Established' },
  { number: '500', label: 'Client/Users' },
  { number: '11', label: 'Served Business Types' },
];

export const values: string[] = [
  'Since 2009',
  'Business Solution Provider',
  'Flexible & User-Friendly Solutions',
  'Industry-Wide Expertise',
];

export const services: ServiceItem[] = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications developed with scalability, performance, accessibility, and security in mind.',
  },
  {
    icon: '📱',
    title: 'Ecommerce Solution',
    description: 'Ecommerce solutions with secure checkout, inventory management, payment gateways, shipping integration, and order management.',
  },
  {
    icon: '🎨',
    title: 'Software Developement',
    description: 'Tailored software applications for business automation, workflow management, reporting, and operational efficiency across various industries.',
  }
];

export const softwareProducts: SoftwareProduct[] = [
  {
    id: 'Accounting-Software',
    name: 'Accouting Software',
    description: 'Manage sales, purchase & payment vouchers, inventory, cash & bank, and generate FBR-compliant invoices with detailed financial reports using our online POS software Pakistan.',
    category: 'Accounting',
    categoryLabel: 'Business Accounting Software',
    heroDescription: "Run your entire business online with our smart, cloud-based POS software Pakistan, offering smooth sales tracking and powerful accounting features.",
    image: product1,

    platformBadges: ['Cloud-Based', 'Browser-Based', 'Multi-User', 'Mobile Friendly'],

    suitablefor: 'Retail Stores, Trading Businesses, Distributors, Service Providers, and Small to Medium Enterprises',

    keyFeatures: [
      'Complete Double-Entry Accounting System',
      'Professional Digital Invoice Management',
      'Real-Time Inventory & Stock Management',
      'Customer and Supplier Ledger Management',
      'Sales, Purchase & Expense Tracking',
      'Business Reports and Financial Analytics'
    ],

    heroImage: product1,

    overview: 'This is a modern accounting and business management platform built to simplify daily business operations. It helps businesses manage accounts, sales, purchases, inventory, invoices, customers, suppliers, expenses, and financial reporting from a centralized dashboard. With an easy-to-use interface and powerful business tools, This enables entrepreneurs and organizations to maintain accurate records, improve decision-making, and grow their operations efficiently.',


    modules: [
      {
        name: 'Accounting',
        description: 'Complete accounting tools to manage business transactions and maintain accurate financial records.',

        features: [
          'Generate Financial Reports',
          'Track Cash Flow',
          'Income Statement',
          'Trial Balance'
        ]
      },

      {
        name: 'Invoicing',
        description: 'Create and send professional online invoicing.',
        features: [
          'Create Online Invoices Instantly',
          'Track Payments in Real-Time',
          'Manage Customers Easily',
          'Secure Cloud Storage'
        ]
      },

      {
        name: 'Inventory',
        description: 'Monitor stock levels, manage products, and get instant alerts to never run out of essentials.',
        features: [
          'Real-Time Stock Tracking',
          'Product Management',
          'Automated Alerts & Reordering',
          'Detailed Inventory Reports'
        ]
      },
    ],

    screenshots: [
      {
        url: product1,
        caption: 'Business Dashboard'
      },
      {
        url: product2,
        caption: 'Sales & Invoice Management'
      },
      {
        url: product3,
        caption: 'Inventory Management'
      }
    ],



    pricingPlans: [
      {
        title: "Plus",
        monthlyprice: "PKR 2,500/month",
        yearlyprice: "PKR 25,000/year",
        description: "For solo owners & small shops",
        features: [
          "2 Users",
          "Invoicing & Billing",
          "Expense Tracking",
          "Basic Inventory Management",
          "Basic Financial Reports (P&L, Balance Sheet)",
          "Data Backup & Export",
          "Email Customer Support",
          "Digital Invoice"
        ]
      },

      {
        title: "Pro",
        monthlyprice: "PKR 5,000/month",
        yearlyprice: "PKR 50,000/year",
        description: "For growing teams",
        features: [
          "Up to 5 Users",
          "Invoicing & Billing",
          "Expense Tracking",
          "Inventory Management",
          "Supports up to 3 Branches/Warehouses ",
          "Advanced Financial Reports (P&L, Balance Sheet)",
          "Bank Reconciliation",
          "Purchase Orders",
          "Role-Based Access Control",
          "Mobile App Access",
          "Data Backup & Export",
          "Email + Chat Customer Support",
          "Free Onboarding & Training",
          "Digital Invoice",
          "FBR POS"
        ]
      },

      {
        title: "Enterprise",
        monthlyprice: "PKR 8,000/month",
        yearlyprice: "PKR 80,000/year",
        description: "For multi-branch businesses.",
        features: [
          "10 Users",
          "Invoicing & Billing",
          "Expense Tracking",
          "Inventory Management",
          "Up to 6 Branches/Warehouses",
          "Advanced + Custom Financial Reports (P&L, Balance Sheet)",
          "Bank Reconciliation",
          "Purchase Orders",
          "Multi-Currency Support",
          "Role-Based Access Control",
          "Customer/Vendor Portal",
          "Mobile App Access",
          "Data Backup & Export",
          "Phone Support",
          "API Access & Integrations",
          "Free Onboarding & Training",
          "Digital Invoice",
          "FBR POS"
        ]
      },

      {
        title: "Digital Invoicing System",
        monthlyprice: "PKR 1,000/month",
        yearlyprice: "PKR 10,000/year",
        description: "Unlimited invoices",
        features: [
          "1 User",
          "Customer Account Creation",
          "Customer Ledger",
          "Product Creation",
          "Product Ledger",
          "Invoice Validation",
          "Digital Invoice Creation",
          "FBR Approved Invoice Format",
          "Email + Chat Support"
        ]
      }
    ],
  },
  {
    id: 'school-erp',
    name: 'School Management System',
    description:
      'A comprehensive School Management ERP that digitalizes academic, administrative, financial, and communication processes through dedicated portals for administrators, teachers, students, and parents.',
    heroDescription: "Revolutionize your school experience with our versatile software, available on web, desktop, and mobile platforms for seamless communication between parents and educators.",
    category: 'School ERP',
    categoryLabel: 'Education Management Software',

    image: product4,

    platformBadges: [
      'Cloud-Based',
      'Browser-Based',
      'Multi-User',
      'Mobile Friendly'
    ],

    suitablefor:
      'Schools, Colleges, Academies, Educational Institutions, and Multi-Campus Organizations',

    keyFeatures: [
      'Complete Student Information Management',
      'Online Fee & Finance Management',
      'Attendance & Examination Management',
      'Teacher, Parent & Student Portals',
      'SMS & Communication System',
      'Reports & Analytics Dashboard'
    ],

    heroImage: product4,

    overview:
      'This School Management System is an all-in-one education ERP platform designed to simplify every aspect of school administration. From admissions and attendance to fee collection, examinations, staff management, communication, and academic reporting, the system provides a centralized digital environment that connects administrators, teachers, students, and parents while improving operational efficiency and reducing paperwork.',
    modules: [
      {
        name: 'Certificate & Document Management',
        description:
          'Generate certificates and official documents with ease.',
        features: [
          'QR Code Attendance',
          'Leaving Certificate',
          'Character Certificate',
          'Provisional Certificate',
          'Activity Certificate',
          'Promote Certificate',

        ]
      },

      {
        name: 'Academic Management',
        description:
          'Manage student records and academic operations efficiently.',
        features: [

          "Time Table",
          "Daily Diary",
          "Student Contact List",
          "Course Management",
          "Student Progress/Sabqi",
          "Inquiry Desk",
          "Attendance Information & more"
        ]
      },

      {
        name: 'Result Management',
        description:
          'Input marks through the system or mobile app and instantly generate results and cumulative reports.',
        features: [
          "Result Feeding",
          "Unit Wise Result Feeding",
          "Class Wise Analysis Report",
          "Subject Analysis Report",
          "Teacher Analysis Report & more",

        ]
      },

      {
        name: 'Fees & Accounts Management',
        description:
          'Simplify fee collection with barcode payments, fee slips, and parent alerts.',
        features: [
          "Fees Posting",
          "Fees Due",
          "Fees Collection Counter",
          "Fees Siblings Voucher",
          "Monthly Comparative report",
          "Financial / Expense Ledger",
          "Class Wise Monthly Breakup & more",
        ]
      }
    ],
    screenshots: [
      {
        url: product4,
        caption: 'School Administration Dashboard'
      },
      {
        url: product5,
        caption: 'Student Information Management'
      },
      {
        url: product6,
        caption: 'Fee & Finance Management'
      }
    ],

  
  },
  //  {
  //   id: 'tijarah-lite',

  //   name: 'Tijarah Lite',

  //   description:
  //     'A modern offline Accounting, Billing and POS application designed for small businesses to manage sales, inventory, expenses, customer accounts and invoices from a single Android device.',
  //   heroDescription: "Automate bookkeeping, invoicing, financial reporting, taxation, and business accounting with an easy-to-use accounting system",

  //   category: 'POS',

  //   categoryLabel: 'Offline Accouting  App',

  //   image: product7,

  //   platformBadges: ['Android', 'Offline', 'Single User'],

  //   suitablefor:
  //     'Retail Shops, Grocery Stores, Pharmacies, Restaurants, Boutiques, Electronics Shops and Small Businesses',

  //   keyFeatures: [
  //     '100% Offline Accounting',
  //     'Fast POS Billing',
  //     'Inventory & Stock Management',
  //     'Digital Khata (Customer Ledger)',
  //     'Expense Tracking',
  //     'WhatsApp Invoice Sharing'
  //   ],

  //   heroImage: product7,

  //   overview:
  //     'Tijarah Lite is a lightweight offline accounting and POS application developed for small businesses that need fast billing without depending on an internet connection. The app combines invoicing, inventory management, expense tracking, customer ledgers, payment reminders and business reporting into one easy-to-use mobile solution. Business data remains available even without internet connectivity, with backup options available for added security.',

  //   modules: [
  //     {
  //       name: 'Billing & POS',
  //       description:
  //         'Create invoices quickly with a simple mobile billing interface.',
  //       features: [
  //         'Quick invoice generation',
  //         'WhatsApp invoice sharing',
  //         'Sales history',
  //         'Payment recording'
  //       ]
  //     },

  //     {
  //       name: 'Inventory Management',
  //       description:
  //         'Track products and monitor stock levels in real time.',
  //       features: [
  //         'Stock management',
  //         'Low stock alerts',
  //         'Product catalog',
  //         'Purchase recording'
  //       ]
  //     },

  //     {
  //       name: 'Expense & Khata',
  //       description:
  //         'Record expenses and manage customer payment history.',
  //       features: [
  //         'Expense tracking',
  //         'Customer ledger',
  //         'Payment reminders',
  //         'Cash flow records'
  //       ]
  //     },

  //     {
  //       name: 'Reports',
  //       description:
  //         'Monitor business performance using simple financial reports.',
  //       features: [
  //         'Sales reports',
  //         'Expense reports',
  //         'Inventory reports',
  //         'Business summaries'
  //       ]
  //     }
  //   ],

  //   screenshots: [
  //     {
  //       url: product7,
  //       caption: 'Dashboard Overview'
  //     },
  //     {
  //       url: product8,
  //       caption: 'Fast Billing & Invoice Screen'
  //     },
  //     {
  //       url: product9,
  //       caption: 'Inventory & Stock Management'
  //     }
  //   ],

  //   pricingPlans: [
  //     {
  //       title: 'Free',
  //       monthlyprice: 'Free',
  //       yearlyprice: 'Free',
  //       description: 'Perfect for small businesses',
  //       features: [
  //         '100% Offline',
  //         'Billing',
  //         'Inventory',
  //         'Expense Tracking',
  //         'Digital Khata'
  //       ]
  //     },
  //     {
  //       title: 'Premium',
  //       monthlyprice: 'In-App Purchase',
  //       yearlyprice: 'In-App Purchase',
  //       description: 'Unlock advanced business features',
  //       features: [
  //         'Everything in Free',
  //         'Business Reports',
  //         'Backup & Restore',
  //         'Priority Features',
  //         'Future Updates'
  //       ]
  //     },
  //     {
  //       title: 'Business',
  //       monthlyprice: 'Contact Us',
  //       yearlyprice: 'Contact Us',
  //       description: 'Custom solutions for growing businesses',
  //       features: [
  //         'Custom Branding',
  //         'Business Consultation',
  //         'Training',
  //         'Priority Support',
  //         'Custom Development'
  //       ]
  //     }
  //   ]
  // },
//   {
//     id: 'jilan-hms',
//     name: 'Jilan Hospital Management System',
//     description:
//       'Hospital software featuring admission register, private billing, laboratory, X-ray, ultrasound, room status, discounts, department-wise reports, and much more.',
//     heroDescription: "Hospital software featuring admission register, private billing, laboratory, X-ray, ultrasound, room status, discounts, department-wise reports, and much more.",

//     category: 'Healthcare',
//     categoryLabel: 'Hospital Management System',

//     image: product10,
//     heroImage: product10,

//     platformBadges: [
//       'Desktop',
//       'Windows',
//       'Multi-User',
//       'SQL Server'
//     ],

//     suitablefor:
//       'Hospitals, Medical Centers, Clinics, Diagnostic Laboratories, Healthcare Organizations, and Corporate Hospitals',

//     keyFeatures: [
//       'Complete In-Patient (IPD) Management',
//       'Out-Patient (OPD) Management',
//       'Laboratory & Radiology Management',
//       'Corporate & Private Billing',
//       'Role-Based User Security',
//       'Automatic Backup & Reporting'
//     ],

//     overview:
//       'Jilan Hospital Management System is an integrated healthcare solution that simplifies every stage of hospital operations. From patient registration and admissions to laboratory testing, radiology, billing, corporate panels, reporting, and administration, the software helps healthcare organizations improve efficiency, reduce paperwork, and deliver better patient care while maintaining complete financial and operational control.',


//     modules: [
//   {
//     name: 'In-Patient',
//     description:
//       'Manage patient admissions, advance receiving, private & corporate billing, room status, discounts, refunds, disputes, and admission registers.',
//     features: [
//       'Admission',
//       'Advance Receiving',
//       'Private Billing',
//       'Corporate Billing (Company Panels)',
//       'Refund',
//       'Dispute',
//       'Discount',
//       'Room Status',
//       'Advance Collection',
//       'Daily / Monthly Income Statement',
//       'Admission Register'
//     ]
//   },
//   {
//     name: 'Out-Patient',
//     description:
//       'Handle general & consultant OPD, laboratory, X-ray, ultrasound, patient billing, refunds, discounts, and department-wise reports.',
//     features: [
//       'General OPD',
//       'Consultant OPD',
//       'Laboratory',
//       'X-Ray',
//       'Ultrasound',
//       'Discount',
//       'Refund / Cancel',
//       'Private Patient',
//       'Corporate Patient (Company Panel)',
//       'Department-wise Report'
//     ]
//   },
//   {
//     name: 'Administration & Reporting',
//     description:
//       'Manage user roles, password security, SQL Server database, Crystal Reports, automatic backups, and system administration.',
//     features: [
//       'User Role',
//       'Role-wise Users',
//       'Password Security',
//       'SQL Server Database',
//       'Crystal Report',
//       'Microsoft .NET Technology',
//       'Auto Backup',
//       'Fast Processing'
//     ]
//   }
// ],

//     screenshots: [
//       {
//         url: product10,
//         caption: 'Hospital Dashboard'
//       },
//       {
//         url: product11,
//         caption: 'Patient Management & Billing'
//       },
//       {
//         url: product12,
//         caption: 'Administration & Reporting'
//       }
//     ],


//     pricingPlans: [
//       {
//         title: 'Clinic',
//         monthlyprice: 'PKR 175,000',
//         yearlyprice: 'PKR 2,100,000',
//         description: 'Suitable for clinics and small healthcare centers.',
//         features: [
//           'Single Branch',
//           'Patient Registration',
//           'OPD Management',
//           'Billing',
//           'Basic Reports'
//         ]
//       },
//       {
//         title: 'Hospital',
//         monthlyprice: 'PKR 350,000',
//         yearlyprice: 'PKR 4,200,000',
//         description: 'Complete solution for hospitals and medical centers.',
//         features: [
//           'IPD & OPD',
//           'Laboratory',
//           'Radiology',
//           'Corporate Billing',
//           'Role Management',
//           'SQL Server Database'
//         ]
//       },
//       {
//         title: 'Enterprise',
//         monthlyprice: 'Contact Us',
//         yearlyprice: 'Contact Us',
//         description: 'Customized solution for multi-branch hospital groups.',
//         features: [
//           'Unlimited Users',
//           'Multi Branch',
//           'Advanced Reports',
//           'Custom Modules',
//           'Priority Support',
//           'Implementation & Training'
//         ]
//       }
//     ]
//   },
  // {
  //   id: 'jilan-finacc',
  //   name: 'Jilan Accounting & Inventory',
  //   description:
  //     'A professional desktop-based Accounting & Inventory Management Software that enables businesses to manage accounting, inventory, purchasing, sales, financial reporting, and stock operations completely offline with high performance and data security.',
  //   heroDescription: "Automate bookkeeping, invoicing, financial reporting, taxation, and business accounting with an easy-to-use accounting system.",
  //   category: 'Accounting',
  //   categoryLabel: 'Desktop Accounting Software',

  //   image: product13,
  //   heroImage: product13,

  //   platformBadges: [
  //     'Desktop',
  //     'Windows',
  //     'Offline',
  //     'Multi-User'
  //   ],

  //   suitablefor:
  //     'Retail Stores, Wholesale Businesses, Trading Companies, Distributors, Manufacturers, and Small to Medium Enterprises',

  //   keyFeatures: [
  //     'Complete Double Entry Accounting',
  //     'Inventory & Stock Management',
  //     'Purchase & Sales Management',
  //     'Financial Statements & Reports',
  //     'Offline Multi-User Operation',
  //     'Fast Desktop Performance'
  //   ],

  //   overview:
  //     'Jilan Accounting & Inventory is a complete desktop business management solution developed for organizations that require reliable offline accounting and inventory control. The software manages purchases, sales, stock movement, financial accounting, receivables, payables, and business reports without requiring an internet connection. Its simple interface, fast processing, and secure local database make it an ideal solution for businesses that prefer full control over their data.',



  //   modules: [
  //     {
  //       name: 'Accounting Management',
  //       description:
  //         'Complete financial accounting with double-entry bookkeeping.',
  //       features: [
  //         'Cash & Bank Book',
  //         'Cash & Bank Voucher',
  //         'Journal Voucher',
  //         'Ledger',
  //         'Trial Balance',
  //         'Profit & Loss'
  //       ]
  //     },
  //     {
  //       name: 'Inventory Management',
  //       description:
  //         'Track inventory movement from purchasing to sales.',
  //       features: [
  //         'Purchase Invoice',
  //         'Sales Invoice',
  //         'Purchase Return',
  //         'Sales Return',
  //         'Stock Adjustment',
  //         'Stock Transfer'
  //       ]
  //     },
  //     {
  //       name: 'Reports & Analysis',
  //       description:
  //         'Generate comprehensive business and financial reports.',
  //       features: [
  //         'Purchase Book',
  //         'Sales Book',
  //         'Party Ledger',
  //         'Item Ledger',
  //         'Stock Reports',
  //         'Chart of Accounts'
  //       ]
  //     }
  //   ],

  //   screenshots: [
  //     {
  //       url: product13,
  //       caption: 'Accounting Dashboard'
  //     },
  //     {
  //       url: product14,
  //       caption: 'Sales Book Report'
  //     },
  //     {
  //       url: product15,
  //       caption: 'Cash Book / Bank Book Entry'
  //     }
  //   ],

  //   pricingPlans: [
  //     {
  //       title: 'Single User',
  //       monthlyprice: 'PKR 3,500',
  //       yearlyprice: 'PKR 42,000',
  //       description: 'Perfect for individual businesses.',
  //       features: [
  //         'Single User',
  //         'Accounting',
  //         'Inventory',
  //         'Financial Reports',
  //         'Installation Included'
  //       ]
  //     },
  //     {
  //       title: 'Business',
  //       monthlyprice: 'PKR 6,500',
  //       yearlyprice: 'PKR 78,000',
  //       description: 'Ideal for growing businesses.',
  //       features: [
  //         '5 Users',
  //         'Accounting',
  //         'Inventory',
  //         'Reports',
  //         'Training Included',
  //         'LAN Support'
  //       ]
  //     },
  //     {
  //       title: 'Enterprise',
  //       monthlyprice: 'Contact Us',
  //       yearlyprice: 'Contact Us',
  //       description: 'Customized solution for large organizations.',
  //       features: [
  //         'Unlimited Users',
  //         'Multi Branch',
  //         'Custom Reports',
  //         'Priority Support',
  //         'Database Migration',
  //         'Customization'
  //       ]
  //     }
  //   ]
  // },

  // {
  //   id: 'jilan-finacc',
  //   name: 'JilanFinAcc (Accounting & Finance)',
  //   description: 'A professional business accounting system featuring double-entry bookkeeping, multi-currency ledger journals, VAT/sales tax calculations, and real-time financial reporting.',
  //   category: 'Accounting',
  //   categoryLabel: 'Advanced Accounting',
  //   image: product4,
  //   platformBadges: ['Desktop', 'Cloud', 'Windows', 'Offline', 'Multi-User'],
  //   suitablefor: 'SMEs, Wholesale Distributors, Audit Firms, Trading Companies, and Corporate Enterprises',
  //   keyFeatures: [
  //     'Double-Entry Bookkeeping Ledger System',
  //     'Automated VAT, Sales Tax, & Excise Tax Calculations',
  //     'Multi-Currency Bill, Quote, & Invoice Generator',
  //     'Real-Time Balance Sheets, Trial Balances, & P&L',
  //     'Secure Electronic Audit Trail Logs',
  //     'Integrated Bank Statement Reconciliation Portal'
  //   ],
  //   heroImage: product4,
  //   overview: 'JilanFinAcc is Jilansoft’s premier, fully in-house developed enterprise accounting suite. Tailored to meet international audit regulations, JilanFinAcc simplifies complex corporate financials. It tracks bank transactions, registers expense journals, manages invoices, and generates professional financial reports with single-click ease. Built with highly secured offline capabilities, JilanFinAcc guarantees your crucial financial data is completely secure and accessible anywhere.',
  //   benefits: [
  //     {
  //       title: 'Tax Season Preparation in Minutes',
  //       description: 'Automated VAT/sales tax calculations compile reports automatically, ready for direct filing, eliminating hours of manual auditing.',
  //       iconName: 'FileText'
  //     },
  //     {
  //       title: 'Absolute Financial Transparency',
  //       description: 'Strict, tamper-proof electronic audit trail logs record every modification, entry, or debit, guaranteeing secure and error-free books.',
  //       iconName: 'Shield'
  //     },
  //     {
  //       title: 'Instant Cash Flow Insights',
  //       description: 'Real-time Profit & Loss charts and live-updating cash-flow indicators provide business owners with instant financial diagnostics.',
  //       iconName: 'TrendingUp'
  //     }
  //   ],
  //   modules: [
  //     {
  //       name: 'General Ledger & Journals',
  //       description: 'Robust double-entry framework supporting custom chart of accounts, manual journal entry debits/credits, and division tracking.',
  //       features: ['Custom chart of accounts tree', 'Recurring journal entry automations', 'Inter-company account adjustments', 'Previous fiscal year closing wizard']
  //     },
  //     {
  //       name: 'Invoicing & Payables',
  //       description: 'Automated client accounts-receivable and vendor accounts-payable, with custom layout invoice printing and multi-currency exchange.',
  //       features: ['Custom professional invoice designer', 'Vendor outstanding balance notifications', 'Partial-payments tracking log', 'Foreign currency exchange rate auto-fetch']
  //     }
  //   ],
  //   screenshots: [
  //     { url: product4, caption: 'JilanFinAcc Dashboard - Live P&L and Sales Journals' },
  //     { url: product6, caption: 'General Ledger Audit Trail and VAT Compilation sheets' }
  //   ],
  //   faq: [
  //     {
  //       question: 'Does JilanFinAcc support multi-currency business operations?',
  //       answer: 'Yes! JilanFinAcc has full multi-currency support, allowing you to invoice in multiple currencies, set custom exchange rates, and view automated profit/loss logs due to currency fluctuations.'
  //     },
  //     {
  //       question: 'Can JilanFinAcc be deployed offline on our office local computers?',
  //       answer: 'Yes! JilanFinAcc can be installed as a local Windows desktop network system that works fully offline without any internet connection, or as a secure Cloud application accessible anywhere. The choice is yours.'
  //     }
  //   ]
  // }
];

export const globalStats: StatItem[] = [
  { number: '2009', label: 'Established' },
  { number: '500', label: 'Client/Users' },
  { number: '11', label: 'Served Business Types' },
];

export const processSteps: ProcessStep[] = [
  {
    icon: '🔍',
    title: 'Discovery',
    description: 'Deep dive into your business, competitors, and users. We define success before a single pixel is drawn.',
  },
  {
    icon: '🎯',
    title: 'Strategy',
    description: 'Architecture, positioning, and a clear roadmap. We align design and engineering goals before building.',
  },
  {
    icon: '⚡',
    title: 'Execution',
    description: 'Design sprints and agile development. You get weekly updates and full visibility throughout.',
  },
  {
    icon: '📊',
    title: 'Growth',
    description: 'Launch, measure, and optimize. We don\'t consider a project done until the metrics are moving.',
  },
];


export const pricingPlans: PricingPlan[] = [
  {
    badge: 'Starter',
    badgeType: 'standard',
    name: 'Launch',
    description: 'Perfect for startups and small businesses ready to establish a strong digital presence.',
    price: '2,500',
    period: '/ project',
    note: 'One-time. Delivered in 3 weeks.',
    features: [
      { text: '5-page website design + dev', included: true },
      { text: 'Mobile-first responsive', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: '2 rounds of revisions', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Custom animations', included: false },
      { text: 'Analytics dashboard', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    badge: 'Most Popular',
    badgeType: 'popular',
    name: 'Growth',
    description: 'For growing brands that need a complete digital strategy and a site that converts.',
    price: '6,500',
    period: '/ project',
    note: 'One-time. Delivered in 6 weeks.',
    isFeatured: true,
    urgency: 'Only 3 slots left this month',
    features: [
      { text: 'Up to 15-page custom build', included: true },
      { text: 'Advanced animations & UX', included: true },
      { text: 'Full SEO strategy', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Analytics + conversion tracking', included: true },
      { text: '3 months post-launch support', included: true },
      { text: 'Performance optimization', included: true },
    ],
    buttonText: 'Start Growing →',
  },
  {
    badge: 'Enterprise',
    badgeType: 'enterprise',
    name: 'Scale',
    description: 'Full-service digital partnership for established companies with complex needs.',
    price: 'Custom',
    note: 'Monthly retainer. Flexible scope.',
    features: [
      { text: 'Dedicated cross-functional team', included: true },
      { text: 'Product + marketing strategy', included: true },
      { text: 'Ongoing development sprints', included: true },
      { text: 'A/B testing & CRO', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'Monthly strategy calls', included: true },
      { text: 'White-glove onboarding', included: true },
    ],
    buttonText: 'Talk to Us →',
  },
];
