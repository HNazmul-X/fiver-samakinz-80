import React from 'react';
import { ThemeBG } from '../../styles/ThemeComponents';

const Tracking = () => {
    return (
        <main id="tracking-board">
            <h2 className="mb-3">Ticki Earning Manager</h2>
            <ThemeBG className="mb-3 d-flex justify-content-between px-3 ">
                <h5>Please input your address above</h5>
                <h5>Buy TIKI</h5>
            </ThemeBG>

            <section className="transiction-history">
                <h4>Your Historical Transiction</h4>

                <div className="data-table dark-highlight">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Hash</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                            <tr>
                                <td className="py-3">0x000000000000000000000000000000000000000</td>
                                <td className="py-3">0 BNB</td>
                                <td> <button className="btn-sm btn btn-success">Success</button></td>
                                <td className="py-3">12/03/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Tracking;