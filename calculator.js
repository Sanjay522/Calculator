 function getValue(value) {
            document.getElementById('result').value += value;
        }

        function Display() {
            document.getElementById('result').value = '';
        }

        function calculateResult() {
            try {
                const result = eval(document.getElementById('result').value);
                document.getElementById('result').value = result;
            } catch (error) {
                alert('Invalid expression');
            }
        }
