/**
 * This file contains all the translations keys used in the application.
 * @fileoverview i18n constants.
 * @global apps/web/~/constants/translations.constants.ts
 */

const TranslationKeys = {
  common: {
    home: 'home',
    login: 'login',
    logout: 'logout',
    dashboard: 'dashboard',
    or: 'or',
  },
  auth: {
    or: 'or', // remove this
    hero1: 'hero1',
    description: 'description',
    password: 'password',
    passwordRepeat: 'passwordRepeat',
    signUpWithEmail: 'signUpWithEmail',
    signUpWithGoogle: 'signUpWithGoogle',
    errors: {
      signUpFailed: 'signUpFailed',
      emailAlreadyInUse: 'emailAlreadyInUse',
      invalidEmail: 'invalidEmail',
      weakPassword: 'weakPassword',
      minPasswordLength: 'minPasswordLength',
      maxPasswordLength: 'maxPasswordLength',
      passwordsDontMatch: 'passwordsDontMatch',
    },
  },
  home: {
    hero1: 'hero1',
    description: 'description',
  },
} as const;

export { TranslationKeys };
export type TranslationKeys = (typeof TranslationKeys)[keyof typeof TranslationKeys];