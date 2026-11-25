export const siteConfig = {
  // رقم مصر من دون + أو مسافات. غيّريه إذا تغيّر رقم التواصل.
  whatsappNumber: '201123357185',
  whatsappMessage: 'مرحباً أميرة، أود التواصل معك بخصوص كتابة محتوى.',
  // أضيفي روابط الحسابات هنا لتفعيل أيقوناتها في الفوتر.
  socials: {
    instagram: '',
    linkedin: '',
    facebook: ''
  }
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
