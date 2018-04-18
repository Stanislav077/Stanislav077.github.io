<?php
class ModelCatalogreviewabout extends Model {
    public function addreviewabout( $data) {
        $this->db->query("INSERT INTO " . DB_PREFIX . "reviewabout SET author = '" . $this->db->escape($data['name']) . "', customer_id = '" . (int)$this->customer->getId() . "', text = '" . $this->db->escape($data['text']) . "', rating = '" . (int)$data['rating'] . "', date_added = NOW()");

        $reviewabout_id = $this->db->getLastId();

        if (in_array('review', (array)$this->config->get('config_mail_alert'))) {
            $this->load->language('mail/review');
            $this->load->model('catalog/product');

           // $product_info = $this->model_catalog_product->getProduct($product_id);

            $subject = sprintf($this->language->get('text_subject'), html_entity_decode($this->config->get('config_name'), ENT_QUOTES, 'UTF-8'));

            $message  = 'You have a new review waiting. ' . "\n";
           $message .= sprintf($this->language->get('text_about'), html_entity_decode('About page', ENT_QUOTES, 'UTF-8')) . "\n";
            $message .= sprintf($this->language->get('text_reviewer'), html_entity_decode($data['name'], ENT_QUOTES, 'UTF-8')) . "\n";
            $message .= sprintf($this->language->get('text_rating'), $data['rating']) . "\n";
            $message .= $this->language->get('text_review') . "\n";
            $message .= html_entity_decode($data['text'], ENT_QUOTES, 'UTF-8') . "\n\n";

            $mail = new Mail();
            $mail->protocol = $this->config->get('config_mail_protocol');
            $mail->parameter = $this->config->get('config_mail_parameter');
            $mail->smtp_hostname = $this->config->get('config_mail_smtp_hostname');
            $mail->smtp_username = $this->config->get('config_mail_smtp_username');
            $mail->smtp_password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8');
            $mail->smtp_port = $this->config->get('config_mail_smtp_port');
            $mail->smtp_timeout = $this->config->get('config_mail_smtp_timeout');

            $mail->setTo($this->config->get('config_email'));
            $mail->setFrom($this->config->get('config_email'));
            $mail->setSender(html_entity_decode($this->config->get('config_name'), ENT_QUOTES, 'UTF-8'));
            $mail->setSubject($subject);
            $mail->setText($message);
            $mail->send();

            // Send to additional alert emails
            $emails = explode(',', $this->config->get('config_alert_email'));

            foreach ($emails as $email) {
                if ($email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $mail->setTo($email);
                    $mail->send();
                }
            }
        }
    }

    public function getreviewaboutsByProductId( $start = 0, $limit = 20) {
        if ($start < 0) {
            $start = 0;
        }

        if ($limit < 1) {
            $limit = 20;
        }

        $query = $this->db->query("SELECT r.reviewabout_id, r.author, r.rating, r.text,  r.date_added FROM " . DB_PREFIX . "reviewabout r  WHERE   r.status = '1'  ORDER BY r.date_added DESC LIMIT " . (int)$start . "," . (int)$limit);

        return $query->rows;
    }

    public function getTotalreviewaboutsByProductId() {
        $query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "reviewabout r  WHERE   r.status = '1' ");

        return $query->row['total'];
    }
}