/**
 * 任意格式字符串转为日期
 * @param str 字符串/日期/时间戳
 */
export declare function toStringDate(str: string | Date | number): Date;
export declare function toStringDate(str: any): Date;

/**
 * 任意格式字符串转为日期
 * @param str 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function toStringDate(str: string | Date | number, format: string): Date;
export declare function toStringDate(str: any, format: string): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    toStringDate: typeof toStringDate;
  }
}

export default toStringDate
