

export const copyToClipboard = (coupon: string) => {
    if (!navigator.clipboard) {
      return;
    }
  
    return navigator.clipboard.writeText(coupon).catch(() => {
      console.error('Navigator clipboard: Could not copy text');
    });
  };
  