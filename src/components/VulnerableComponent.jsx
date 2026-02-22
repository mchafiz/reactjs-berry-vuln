const VulnerableComponent = () => {
  // Vulnerability: Hardcoded secret (CWE-798)
  const apiKey = '12345-ABCDE-SECRET-KEY';

  // Vulnerability: XSS (CWE-79)
  const userInput = '<img src=x onerror=alert(1)>';

  // Code Smell: console.log
  console.log('Component rendered with key:', apiKey);

  // Code Smell: TODO comment
  // TODO: Fix this security issue later

  return (
    <div>
      <h2>Vulnerable Component</h2>
      <p>Secret Key: {apiKey}</p>
      {/* Vulnerability: Using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
    </div>
  );
};

export default VulnerableComponent;
