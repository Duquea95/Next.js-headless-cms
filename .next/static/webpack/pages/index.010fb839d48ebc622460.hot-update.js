webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.js\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cart */ \"./components/Cart.js\");\n/* harmony import */ var _components_CustomerAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CustomerAuth */ \"./components/CustomerAuth.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout */ \"./pages/checkout.js\");\n\n\nvar _jsxFileName = \"/Users/anthony/Documents/storefront-api-examples/swift_headless_cms/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst query = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default.a`\n  query query {\n    shop {\n      name\n      description\n      products(first:20) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            options {\n              id\n              name\n              values\n            }\n            variants(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  title\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    src\n                  }\n                  price\n                }\n              }\n            }\n            images(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  src\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nfunction Home(props) {\n  _s();\n\n  const {\n    0: isCartOpen,\n    1: setCartOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: isNewCustomer,\n    1: setNewCustomer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: isCustomerAuthOpen,\n    1: setCustomerAuthOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: showAccountVerificationMessage,\n    1: setAccountVerificationMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: checkout,\n    1: setCheckout\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lineItems: {\n      edges: []\n    }\n  });\n  const {\n    0: customerAccessToken,\n    1: setCustomerAccessToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const [createCheckoutMutation, {\n    data: createCheckoutData,\n    loading: createCheckoutLoading,\n    error: createCheckoutError\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"createCheckout\"]);\n  const [lineItemAddMutation, {\n    data: lineItemAddData,\n    loading: lineItemAddLoading,\n    error: lineItemAddError\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"checkoutLineItemsAdd\"]);\n  const [lineItemUpdateMutation, {\n    data: lineItemUpdateData,\n    loading: lineItemUpdateLoading,\n    error: lineItemUpdateError\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"checkoutLineItemsUpdate\"]);\n  const [lineItemRemoveMutation, {\n    data: lineItemRemoveData,\n    loading: lineItemRemoveLoading,\n    error: lineItemRemoveError\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"checkoutLineItemsRemove\"]);\n  const [customerAssociateMutation, {\n    data: customerAssociateData,\n    loading: customerAssociateLoading,\n    error: customerAssociateError\n  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"])(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"checkoutCustomerAssociate\"]);\n  const {\n    loading: shopLoading,\n    error: shopError,\n    data: shopData\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(query);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const variables = {\n      input: {}\n    };\n    createCheckoutMutation({\n      variables\n    }).then(res => {\n      console.log(res);\n    }, err => {\n      console.log('create checkout error', err);\n    });\n  }, []);\n  Object(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"])(createCheckoutData, 'checkoutCreate', setCheckout);\n  Object(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"])(lineItemAddData, 'checkoutLineItemsAdd', setCheckout);\n  Object(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"])(lineItemUpdateData, 'checkoutLineItemsUpdate', setCheckout);\n  Object(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"])(lineItemRemoveData, 'checkoutLineItemsRemove', setCheckout);\n  Object(_checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"])(customerAssociateData, 'checkoutCustomerAssociate', setCheckout);\n\n  const handleCartClose = () => {\n    setCartOpen(false);\n  };\n\n  const openCustomerAuth = event => {\n    if (event.target.getAttribute('data-customer-type') === \"new-customer\") {\n      setNewCustomer(true);\n      setCustomerAuthOpen(true);\n    } else {\n      setNewCustomer(false);\n      setCustomerAuthOpen(true);\n    }\n  };\n\n  const accountVerificationMessage = () => {\n    setAccountVerificationMessage(true);\n    setTimeout(() => {\n      setAccountVerificationMessage(false);\n    }, 5000);\n  };\n\n  const closeCustomerAuth = () => {\n    setCustomerAuthOpen(false);\n  };\n\n  const addVariantToCart = (variantId, quantity) => {\n    const variables = {\n      checkoutId: checkout.id,\n      lineItems: [{\n        variantId,\n        quantity: parseInt(quantity, 10)\n      }]\n    }; // TODO replace for each mutation in the checkout thingy. can we export them from there???\n    // create your own custom hook???\n\n    lineItemAddMutation({\n      variables\n    }).then(res => {\n      setCartOpen(true);\n    });\n  };\n\n  const updateLineItemInCart = (lineItemId, quantity) => {\n    const variables = {\n      checkoutId: checkout.id,\n      lineItems: [{\n        id: lineItemId,\n        quantity: parseInt(quantity, 10)\n      }]\n    };\n    lineItemUpdateMutation({\n      variables\n    });\n  };\n\n  const removeLineItemInCart = lineItemId => {\n    const variables = {\n      checkoutId: checkout.id,\n      lineItemIds: [lineItemId]\n    };\n    lineItemRemoveMutation({\n      variables\n    });\n  };\n\n  const associateCustomerCheckout = customerAccessToken => {\n    const variables = {\n      checkoutId: checkout.id,\n      customerAccessToken: customerAccessToken\n    };\n    customerAssociateMutation({\n      variables\n    }).then(res => {\n      setCustomerAuthOpen(false);\n    });\n  };\n\n  if (shopLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (shopError) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: shopError.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"App\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Link, {\n        href: \"/product\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 205,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"Product-wrapper\",\n        children: shopData.shop.products.edges.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          addVariantToCart: addVariantToCart,\n          checkout: checkout,\n          product: product.node\n        }, product.node.id.toString(), false, {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 207,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 202,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"dW/b3CrSbsa20+feTkJ1P2fd5s0=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useMutation\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"], _checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"], _checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"], _checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"], _checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"], _checkout__WEBPACK_IMPORTED_MODULE_8__[\"useCheckoutEffect\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJxdWVyeSIsImdxbCIsIkhvbWUiLCJwcm9wcyIsImlzQ2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZVN0YXRlIiwiaXNOZXdDdXN0b21lciIsInNldE5ld0N1c3RvbWVyIiwiaXNDdXN0b21lckF1dGhPcGVuIiwic2V0Q3VzdG9tZXJBdXRoT3BlbiIsInNob3dBY2NvdW50VmVyaWZpY2F0aW9uTWVzc2FnZSIsInNldEFjY291bnRWZXJpZmljYXRpb25NZXNzYWdlIiwiY2hlY2tvdXQiLCJzZXRDaGVja291dCIsImxpbmVJdGVtcyIsImVkZ2VzIiwiY3VzdG9tZXJBY2Nlc3NUb2tlbiIsInNldEN1c3RvbWVyQWNjZXNzVG9rZW4iLCJjcmVhdGVDaGVja291dE11dGF0aW9uIiwiZGF0YSIsImNyZWF0ZUNoZWNrb3V0RGF0YSIsImxvYWRpbmciLCJjcmVhdGVDaGVja291dExvYWRpbmciLCJlcnJvciIsImNyZWF0ZUNoZWNrb3V0RXJyb3IiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZUNoZWNrb3V0IiwibGluZUl0ZW1BZGRNdXRhdGlvbiIsImxpbmVJdGVtQWRkRGF0YSIsImxpbmVJdGVtQWRkTG9hZGluZyIsImxpbmVJdGVtQWRkRXJyb3IiLCJjaGVja291dExpbmVJdGVtc0FkZCIsImxpbmVJdGVtVXBkYXRlTXV0YXRpb24iLCJsaW5lSXRlbVVwZGF0ZURhdGEiLCJsaW5lSXRlbVVwZGF0ZUxvYWRpbmciLCJsaW5lSXRlbVVwZGF0ZUVycm9yIiwiY2hlY2tvdXRMaW5lSXRlbXNVcGRhdGUiLCJsaW5lSXRlbVJlbW92ZU11dGF0aW9uIiwibGluZUl0ZW1SZW1vdmVEYXRhIiwibGluZUl0ZW1SZW1vdmVMb2FkaW5nIiwibGluZUl0ZW1SZW1vdmVFcnJvciIsImNoZWNrb3V0TGluZUl0ZW1zUmVtb3ZlIiwiY3VzdG9tZXJBc3NvY2lhdGVNdXRhdGlvbiIsImN1c3RvbWVyQXNzb2NpYXRlRGF0YSIsImN1c3RvbWVyQXNzb2NpYXRlTG9hZGluZyIsImN1c3RvbWVyQXNzb2NpYXRlRXJyb3IiLCJjaGVja291dEN1c3RvbWVyQXNzb2NpYXRlIiwic2hvcExvYWRpbmciLCJzaG9wRXJyb3IiLCJzaG9wRGF0YSIsInVzZVF1ZXJ5IiwidXNlRWZmZWN0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVyciIsInVzZUNoZWNrb3V0RWZmZWN0IiwiaGFuZGxlQ2FydENsb3NlIiwib3BlbkN1c3RvbWVyQXV0aCIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYWNjb3VudFZlcmlmaWNhdGlvbk1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiY2xvc2VDdXN0b21lckF1dGgiLCJhZGRWYXJpYW50VG9DYXJ0IiwidmFyaWFudElkIiwicXVhbnRpdHkiLCJjaGVja291dElkIiwiaWQiLCJwYXJzZUludCIsInVwZGF0ZUxpbmVJdGVtSW5DYXJ0IiwibGluZUl0ZW1JZCIsInJlbW92ZUxpbmVJdGVtSW5DYXJ0IiwibGluZUl0ZW1JZHMiLCJhc3NvY2lhdGVDdXN0b21lckNoZWNrb3V0IiwibWVzc2FnZSIsInNob3AiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJub2RlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsU0FBSixFQUFlO0FBQ2Isd0JBQU87QUFBQSxnQkFBSUEsU0FBUyxDQUFDK0I7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxJQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtCQUNJOUIsUUFBUSxDQUFDK0IsSUFBVCxDQUFjQyxRQUFkLENBQXVCbEUsS0FBdkIsQ0FBNkJtRSxHQUE3QixDQUFpQ0MsT0FBTyxpQkFDeEMscUVBQUMsMkRBQUQ7QUFBUywwQkFBZ0IsRUFBRWYsZ0JBQTNCO0FBQTZDLGtCQUFRLEVBQUV4RCxRQUF2RDtBQUFrRyxpQkFBTyxFQUFFdUUsT0FBTyxDQUFDQztBQUFuSCxXQUFzRUQsT0FBTyxDQUFDQyxJQUFSLENBQWFaLEVBQWIsQ0FBZ0JhLFFBQWhCLEVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBN0lRcEYsSTtVQWVGd0IsK0QsRUFPQUEsK0QsRUFPQUEsK0QsRUFPQUEsK0QsRUFPQUEsK0QsRUFFMkR5Qiw0RCxFQWVoRVMsMkQsRUFDQUEsMkQsRUFDQUEsMkQsRUFDQUEsMkQsRUFDQUEsMkQ7OztLQWhFTzFELEk7QUErSU1BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XG5pbXBvcnQgQ3VzdG9tZXJBdXRoV2l0aE11dGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VzdG9tZXJBdXRoJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHtcbiAgdXNlQ2hlY2tvdXRFZmZlY3QsXG4gIGNyZWF0ZUNoZWNrb3V0LFxuICBjaGVja291dExpbmVJdGVtc0FkZCxcbiAgY2hlY2tvdXRMaW5lSXRlbXNVcGRhdGUsXG4gIGNoZWNrb3V0TGluZUl0ZW1zUmVtb3ZlLFxuICBjaGVja291dEN1c3RvbWVyQXNzb2NpYXRlLFxufSBmcm9tICcuL2NoZWNrb3V0JztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHF1ZXJ5IHtcbiAgICBzaG9wIHtcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcm9kdWN0cyhmaXJzdDoyMCkge1xuICAgICAgICBwYWdlSW5mbyB7XG4gICAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgICBoYXNQcmV2aW91c1BhZ2VcbiAgICAgICAgfVxuICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIG9wdGlvbnMge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDI1MCkge1xuICAgICAgICAgICAgICBwYWdlSW5mbyB7XG4gICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgICAgICAgICBoYXNQcmV2aW91c1BhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAyNTApIHtcbiAgICAgICAgICAgICAgcGFnZUluZm8ge1xuICAgICAgICAgICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKXtcblxuICBjb25zdCBbaXNDYXJ0T3BlbixzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc05ld0N1c3RvbWVyLHNldE5ld0N1c3RvbWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzQ3VzdG9tZXJBdXRoT3BlbixzZXRDdXN0b21lckF1dGhPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBY2NvdW50VmVyaWZpY2F0aW9uTWVzc2FnZSxzZXRBY2NvdW50VmVyaWZpY2F0aW9uTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaGVja291dCxzZXRDaGVja291dF0gPSB1c2VTdGF0ZSh7IGxpbmVJdGVtczogeyBlZGdlczogW10gfX0pO1xuXG4gIGNvbnN0IFtjdXN0b21lckFjY2Vzc1Rva2VuLCBzZXRDdXN0b21lckFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtjcmVhdGVDaGVja291dE11dGF0aW9uLFxuICB7XG4gICAgZGF0YTogY3JlYXRlQ2hlY2tvdXREYXRhLFxuICAgIGxvYWRpbmc6IGNyZWF0ZUNoZWNrb3V0TG9hZGluZyxcbiAgICBlcnJvcjogY3JlYXRlQ2hlY2tvdXRFcnJvclxuICB9XSA9IHVzZU11dGF0aW9uKGNyZWF0ZUNoZWNrb3V0KTtcblxuICBjb25zdCBbbGluZUl0ZW1BZGRNdXRhdGlvbixcbiAge1xuICAgIGRhdGE6IGxpbmVJdGVtQWRkRGF0YSxcbiAgICBsb2FkaW5nOiBsaW5lSXRlbUFkZExvYWRpbmcsXG4gICAgZXJyb3I6IGxpbmVJdGVtQWRkRXJyb3JcbiAgfV0gPSB1c2VNdXRhdGlvbihjaGVja291dExpbmVJdGVtc0FkZCk7XG5cbiAgY29uc3QgW2xpbmVJdGVtVXBkYXRlTXV0YXRpb24sXG4gIHtcbiAgICBkYXRhOiBsaW5lSXRlbVVwZGF0ZURhdGEsXG4gICAgbG9hZGluZzogbGluZUl0ZW1VcGRhdGVMb2FkaW5nLFxuICAgIGVycm9yOiBsaW5lSXRlbVVwZGF0ZUVycm9yXG4gIH1dID0gdXNlTXV0YXRpb24oY2hlY2tvdXRMaW5lSXRlbXNVcGRhdGUpO1xuXG4gIGNvbnN0IFtsaW5lSXRlbVJlbW92ZU11dGF0aW9uLFxuICB7XG4gICAgZGF0YTogbGluZUl0ZW1SZW1vdmVEYXRhLFxuICAgIGxvYWRpbmc6IGxpbmVJdGVtUmVtb3ZlTG9hZGluZyxcbiAgICBlcnJvcjogbGluZUl0ZW1SZW1vdmVFcnJvclxuICB9XSA9IHVzZU11dGF0aW9uKGNoZWNrb3V0TGluZUl0ZW1zUmVtb3ZlKTtcblxuICBjb25zdCBbY3VzdG9tZXJBc3NvY2lhdGVNdXRhdGlvbixcbiAge1xuICAgIGRhdGE6IGN1c3RvbWVyQXNzb2NpYXRlRGF0YSxcbiAgICBsb2FkaW5nOiBjdXN0b21lckFzc29jaWF0ZUxvYWRpbmcsXG4gICAgZXJyb3I6IGN1c3RvbWVyQXNzb2NpYXRlRXJyb3JcbiAgfV0gPSB1c2VNdXRhdGlvbihjaGVja291dEN1c3RvbWVyQXNzb2NpYXRlKTtcblxuICBjb25zdCB7IGxvYWRpbmc6c2hvcExvYWRpbmcsIGVycm9yOnNob3BFcnJvciwgZGF0YTpzaG9wRGF0YSB9ID0gdXNlUXVlcnkocXVlcnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVzID0geyBpbnB1dDoge30gfTtcbiAgICBjcmVhdGVDaGVja291dE11dGF0aW9uKHsgdmFyaWFibGVzIH0pLnRoZW4oXG4gICAgICByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyggcmVzICk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZSBjaGVja291dCBlcnJvcicsIGVyciApO1xuICAgICAgfVxuICAgICk7XG5cbiAgfSwgW10pO1xuXG4gIHVzZUNoZWNrb3V0RWZmZWN0KGNyZWF0ZUNoZWNrb3V0RGF0YSwgJ2NoZWNrb3V0Q3JlYXRlJywgc2V0Q2hlY2tvdXQpO1xuICB1c2VDaGVja291dEVmZmVjdChsaW5lSXRlbUFkZERhdGEsICdjaGVja291dExpbmVJdGVtc0FkZCcsIHNldENoZWNrb3V0KTtcbiAgdXNlQ2hlY2tvdXRFZmZlY3QobGluZUl0ZW1VcGRhdGVEYXRhLCAnY2hlY2tvdXRMaW5lSXRlbXNVcGRhdGUnLCBzZXRDaGVja291dCk7XG4gIHVzZUNoZWNrb3V0RWZmZWN0KGxpbmVJdGVtUmVtb3ZlRGF0YSwgJ2NoZWNrb3V0TGluZUl0ZW1zUmVtb3ZlJywgc2V0Q2hlY2tvdXQpO1xuICB1c2VDaGVja291dEVmZmVjdChjdXN0b21lckFzc29jaWF0ZURhdGEsICdjaGVja291dEN1c3RvbWVyQXNzb2NpYXRlJywgc2V0Q2hlY2tvdXQpO1xuXG4gIGNvbnN0IGhhbmRsZUNhcnRDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRDYXJ0T3BlbiggZmFsc2UgKTtcbiAgfTtcblxuICBjb25zdCBvcGVuQ3VzdG9tZXJBdXRoID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tZXItdHlwZScpID09PSBcIm5ldy1jdXN0b21lclwiKSB7XG4gICAgICBzZXROZXdDdXN0b21lciggdHJ1ZSApO1xuICAgICAgc2V0Q3VzdG9tZXJBdXRoT3BlbiggdHJ1ZSApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROZXdDdXN0b21lciggZmFsc2UgKTtcbiAgICAgIHNldEN1c3RvbWVyQXV0aE9wZW4oIHRydWUgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWNjb3VudFZlcmlmaWNhdGlvbk1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgc2V0QWNjb3VudFZlcmlmaWNhdGlvbk1lc3NhZ2UodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFjY291bnRWZXJpZmljYXRpb25NZXNzYWdlKGZhbHNlKVxuICAgfSwgNTAwMCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VDdXN0b21lckF1dGggPSAoKSA9PiB7XG4gICAgc2V0Q3VzdG9tZXJBdXRoT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVmFyaWFudFRvQ2FydCA9ICh2YXJpYW50SWQsIHF1YW50aXR5KSA9PntcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB7IGNoZWNrb3V0SWQ6Y2hlY2tvdXQuaWQsIGxpbmVJdGVtczogIFt7dmFyaWFudElkLCBxdWFudGl0eTogcGFyc2VJbnQocXVhbnRpdHksIDEwKX1dIH07XG4gICAgLy8gVE9ETyByZXBsYWNlIGZvciBlYWNoIG11dGF0aW9uIGluIHRoZSBjaGVja291dCB0aGluZ3kuIGNhbiB3ZSBleHBvcnQgdGhlbSBmcm9tIHRoZXJlPz8/XG4gICAgLy8gY3JlYXRlIHlvdXIgb3duIGN1c3RvbSBob29rPz8/XG5cbiAgICBsaW5lSXRlbUFkZE11dGF0aW9uKHsgdmFyaWFibGVzIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTGluZUl0ZW1JbkNhcnQgPSAobGluZUl0ZW1JZCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB7IGNoZWNrb3V0SWQ6Y2hlY2tvdXQuaWQsIGxpbmVJdGVtczogW3tpZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHBhcnNlSW50KHF1YW50aXR5LCAxMCl9XSB9O1xuICAgIGxpbmVJdGVtVXBkYXRlTXV0YXRpb24oeyB2YXJpYWJsZXMgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlTGluZUl0ZW1JbkNhcnQgPSAobGluZUl0ZW1JZCkgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgY2hlY2tvdXRJZDpjaGVja291dC5pZCwgbGluZUl0ZW1JZHM6IFtsaW5lSXRlbUlkXSB9O1xuICAgIGxpbmVJdGVtUmVtb3ZlTXV0YXRpb24oeyB2YXJpYWJsZXMgfSk7XG4gIH07XG5cbiAgY29uc3QgYXNzb2NpYXRlQ3VzdG9tZXJDaGVja291dCA9IChjdXN0b21lckFjY2Vzc1Rva2VuKSA9PiB7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB7IGNoZWNrb3V0SWQ6Y2hlY2tvdXQuaWQsIGN1c3RvbWVyQWNjZXNzVG9rZW46IGN1c3RvbWVyQWNjZXNzVG9rZW4gfTtcbiAgICBjdXN0b21lckFzc29jaWF0ZU11dGF0aW9uKHsgdmFyaWFibGVzIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Q3VzdG9tZXJBdXRoT3BlbihmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHNob3BMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcgLi4uPC9wPjtcbiAgfVxuXG4gIGlmIChzaG9wRXJyb3IpIHtcbiAgICByZXR1cm4gPHA+e3Nob3BFcnJvci5tZXNzYWdlfTwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RcIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgeyBzaG9wRGF0YS5zaG9wLnByb2R1Y3RzLmVkZ2VzLm1hcChwcm9kdWN0ID0+XG4gICAgICAgICAgICA8UHJvZHVjdCBhZGRWYXJpYW50VG9DYXJ0PXthZGRWYXJpYW50VG9DYXJ0fSBjaGVja291dD17Y2hlY2tvdXR9IGtleT17cHJvZHVjdC5ub2RlLmlkLnRvU3RyaW5nKCl9IHByb2R1Y3Q9e3Byb2R1Y3Qubm9kZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})