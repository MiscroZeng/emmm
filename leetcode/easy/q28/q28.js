var strStr = function (haystack, needle) {
    const len = needle.length;
    if (!needle.length) return 0
    for (let i = 0, l = haystack.length; i <= l - len; i++) {
        if (haystack.slice(i, i + len) === needle) return i;
    }
};