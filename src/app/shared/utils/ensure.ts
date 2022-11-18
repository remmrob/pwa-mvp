/**
 * Function which ensures a value from a function to be available when needed.
 * (e.g finding a value in an array which will otherwise be Type | undefined)
 *
 * @export
 * @template T
 * @param {(T | undefined | null)} argument
 * @param {string} [message='Error ensuring the model to be accessible']
 * @return {*}  {T}
 */
 export default function ensure<T>(
    argument: T | undefined | null,
    message: string = 'Error ensuring the model to be accessible'
  ): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }
  
    return argument;
  }