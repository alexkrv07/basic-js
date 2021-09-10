import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  const index = email.lastIndexOf('@');
  return email.substring(index + 1);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
