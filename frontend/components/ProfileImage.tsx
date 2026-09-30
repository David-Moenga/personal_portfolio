export function ProfileImage() {
  return (
    <div className="portrait">
      <img
        src="/profile.jpeg"
        alt="David Moenga"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "160px 160px 0 0",
          display: "block",
        }}
      />
    </div>
  );
}
