//If you might need to rename the require here depending on what you put into the node module
const {
  currentDateTime, 
  isISO8601Date,
  TransactionController,
  TransactionSchema,
  Transaction,
  PaymentType,
  CashTransactionBuilder,
  CreditCardTransactionBuilder
} = require( "database" );

const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");
const i18nextBackend = require("i18next-electron-fs-backend");
const Store = require("secure-electron-store").default;
const ContextMenu = require("secure-electron-context-menu").default;
const SecureElectronLicenseKeys = require("secure-electron-license-keys");

// Create the electron store to be made available in the renderer process
const store = new Store();

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
//To use the ipc renderer you must use window.api."insert your defined method"
//With this you do not need to import any method but to call the predefined method located 
//in the context bridge
contextBridge.exposeInMainWorld("api", {
  i18nextElectronBackend: i18nextBackend.preloadBindings(ipcRenderer, process),
  store: store.preloadBindings(ipcRenderer, fs),
  contextMenu: ContextMenu.preloadBindings(ipcRenderer),
  licenseKeys: SecureElectronLicenseKeys.preloadBindings(ipcRenderer),
  isISO8601Date:(ipcRenderer, isISO8601Date),
  currentDateTime: (ipcRenderer, currentDateTime),
  TransactionController: (ipcRenderer, TransactionController),
  TransactionSchema:(ipcRenderer, TransactionSchema),
  Transaction: (ipcRenderer,Transaction),
  PaymentType: (ipcRenderer, PaymentType),
  CashTransactionBuilder: (ipcRenderer,CashTransactionBuilder),
  CreditCardTransactionBuilder: (ipcRenderer, CreditCardTransactionBuilder)
});
