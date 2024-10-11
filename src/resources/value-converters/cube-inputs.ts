export class CubeInputsValueConverter {
    public toView(value: string): string | undefined {
        if (!value) {
            return;
        }
        let returnString = '';
        const splitStrings = value.split(' + ');
        for (const string of splitStrings) {
            returnString += string + '<br>';
        }
        return returnString;
    }
}