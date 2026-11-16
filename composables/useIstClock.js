/**
 * Real-time Indian Standard Time (IST, UTC+5:30) Military Timekeeper
 */
export function useIstClock() {
  const timeString = ref('00:00:00 IST');
  const dateString = ref('');
  let timer = null;

  const updateTime = () => {
    const now = new Date();
    // Options for Indian Standard Time in Asia/Kolkata
    const timeFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    timeString.value = `${timeFormatter.format(now)} IST`;
    dateString.value = dateFormatter.format(now).toUpperCase();
  };

  onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
  });

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
  });

  return {
    timeString,
    dateString
  };
}
