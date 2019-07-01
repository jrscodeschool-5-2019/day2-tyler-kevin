/**
 * 
 * @param {String} string 
 * @param {Object} object
 * 
 * @returns {Any} 
 */

export default function prop(string, object) {
    return object.string ? object.string : null
}