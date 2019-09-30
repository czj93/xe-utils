import { XEUtilsMethods } from '../xe-utils'

export interface toArrayTreeOptions {
  strict?: boolean;
  key?: string;
  parentKey?: string;
  children?: string;
  sortKey?: string;
  reverse?: string;
  data?: string;
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} array 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
 */
export declare function toArrayTree(array: Array<any>, options?: toArrayTreeOptions): Array<any>;

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个带层级的数据列表转成树结构
     * @param {Array} array 数组
     * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
     */
    toArrayTree(array: Array<any>, options?: toArrayTreeOptions): Array<any>;
  }
}

export default toArrayTree