<?php
// This renders on the frontend
echo '<p class="current-date-block ">Current Date: ' . esc_html( date_i18n( get_option( 'date_format' ) ) ) . '</p>';
