function TelegramCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <path
        fill="#0D0D0D"
        d="M20.01 40.01c11.045 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20c0 11.045 8.954 20 20 20z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.052 19.793c5.829-2.53 9.709-4.213 11.657-5.029 5.546-2.314 6.711-2.714 7.46-2.73.167 0 .534.032.784.232.2.167.25.383.283.55.033.166.066.516.033.783-.3 3.164-1.599 10.84-2.265 14.37-.283 1.5-.833 2-1.365 2.05-1.166.1-2.049-.767-3.165-1.5-1.765-1.149-2.747-1.865-4.462-2.997-1.982-1.299-.7-2.015.433-3.18.3-.3 5.412-4.963 5.512-5.38.016-.05.016-.25-.1-.35-.117-.1-.283-.066-.417-.033-.183.034-2.98 1.899-8.426 5.58-.8.549-1.515.815-2.165.798-.716-.016-2.081-.4-3.114-.732-1.249-.4-2.248-.616-2.165-1.316.05-.366.55-.733 1.482-1.116z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TelegramCircle;
