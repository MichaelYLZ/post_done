import '@babel/polyfill';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default ENV => {
    
    return {
        mode: 'production',
        
        entry: [
                  '@babel/polyfill',           './src/index.js'
                ],
        
        plugins: [
            new HtmlWebpackPlugin(
                {   
                    template: './src/index.html',
                }
            ),
            
            new CleanWebpackPlugin(['dist']),
            
            new MiniCssPlugin(),
            
            new CopyPlugin(['./src/client.js'])
            
        ],
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        }
    }
}