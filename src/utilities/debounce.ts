/**
 * Debounces a function to be executed after a specified wait time.
 * @param {(...args: any[]) => void} func The function to be debounced.
 * @param {number} time The time to wait before executing the function.
 * @returns {DebouncedFunction} A debounced version of the function.
 */
export function debounce(func: (...args: any[]) => void, time: number) {
    let timeout: number | undefined;
    const debouncedFunction = (...args: any[]) => {
        if (debouncedFunction.isDebouncing) {
            clearTimeout(timeout);
        }
        debouncedFunction.isDebouncing = true;
        debouncedFunction.isRunning = false;

        timeout = window.setTimeout(async () => {
            debouncedFunction.isRunning = true;
            await func(...args);
            debouncedFunction.isRunning = false;
            debouncedFunction.isDebouncing = false;
        }, time);
    };

    debouncedFunction.isDebouncing = false;
    debouncedFunction.isRunning = false;

    debouncedFunction.cancel = () => {
        if (debouncedFunction.isDebouncing) {
            clearTimeout(timeout);
            debouncedFunction.isDebouncing = false;
            debouncedFunction.isRunning = false;
        }
    };

    return debouncedFunction;
}

export interface DebouncedFunction extends Function {
    isDebouncing: boolean;
    isRunning: boolean;
    cancel: () => void;
}